import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ConfirmDto, DepositDto, ParameterDto } from './dto';
import { noop } from 'rxjs';
import moment from 'moment-timezone';

@Injectable()
export class DepositService {
  constructor(private readonly prismaService: PrismaService) {}

  async calculation_detail_list(params: ParameterDto) {
    // const offset = Number(params.limit) * (Number(params.page) - 1) || 0;
    // const limit = Number(params.limit) || 10;
    const startDate = moment(params.startDate).format('YYYY-MM-DD');
    const endDate = moment(params.endDate).format('YYYY-MM-DD');

    const list = await this.prismaService.$queryRaw`
        select users.id id, users.name name, users.member_id memberId,
               (select subuser.id from users subuser where users.sub1 = subuser.id ) sub1Id,
               (select subuser.name from users subuser where users.sub1 = subuser.id ) sub1Name,
               (select subuser.id from users subuser where users.sub2 = subuser.id ) sub2Id,
               (select subuser.name from users subuser where users.sub2 = subuser.id ) sub2Name,
               sub.id subId, sub.name subName, sub.member_id subMemberId, 
               company_levels.id levelId, company_levels.title levelTitle, company_levels.rewardRate rewardAmount,
               depositDate saleDate, deposit.amount saleAmount, deposit.memo memo
        from users
                 left join users as sub on users.id = sub.recomid
                 left join deposit  on sub.id = deposit.userId
                 join company_levels on users.levelId = company_levels.id
        where (depositDate >= ${startDate}
            and depositDate <= ${endDate} and deposit.amount is not NULL and status = 1) or deposit.amount is null
        order by users.id, sub.id;
    `;
    const selfBalanceList = await this.prismaService.$queryRaw`
        select users.id id,  users.name, depositDate saleDate, sum(if(deposit.status = 1, deposit.amount, 0)) selfBalance
        from users
                 left join deposit  on users.id = deposit.userId
        where (depositDate >= ${startDate}
                   
            and depositDate <= ${endDate} and deposit.amount is not NULL and deposit.status = 1) or deposit.amount is NULL or deposit.status = 0
        group by users.id
        order by users.id;
    `;
    console.log(list);
    return {
      list: list,
      selfBalanceList: selfBalanceList,
    };
  }
  async calculation_list(params: ParameterDto) {
    // const offset = Number(params.limit) * (Number(params.page) - 1) || 0;
    // const limit = Number(params.limit) || 10;
    const startDate = moment(params.startDate).format('YYYY-MM-DD');
    const endDate = moment(params.endDate).format('YYYY-MM-DD');

    const list = await this.prismaService.$queryRaw`
        select users.id id, users.name name,
               (select subuser.id from users subuser where users.sub1 = subuser.id ) sub1Id,
               (select subuser.name from users subuser where users.sub1 = subuser.id ) sub1Name,
               (select subuser.id from users subuser where users.sub2 = subuser.id ) sub2Id,
               (select subuser.name from users subuser where users.sub2 = subuser.id ) sub2Name,
               sub.id subId, sub.name subName, company_levels.id levelId, company_levels.title levelTitle, depositDate saleDate, deposit.amount saleAmount
        from users
                 left join users as sub on users.id = sub.recomid
                 left join deposit  on sub.id = deposit.userId
                 join company_levels on users.levelId = company_levels.id
        where (depositDate >= ${startDate}
            and depositDate <= ${endDate} and deposit.amount is not NULL and status = 1) or deposit.amount is null
        group by users.id, sub.id
        order by users.id, sub.id;
    `;
    const selfBalanceList = await this.prismaService.$queryRaw`
        select users.id id,  users.name, depositDate saleDate, sum(if(deposit.status = 1, deposit.amount, 0)) selfBalance
        from users
                 left join deposit  on users.id = deposit.userId
        where (depositDate >= ${startDate}
                   
            and depositDate <= ${endDate} and deposit.amount is not NULL and deposit.status = 1) or deposit.amount is NULL or deposit.status = 0
        group by users.id
        order by users.id;
    `;
    console.log(list);
    return {
      list: list,
      selfBalanceList: selfBalanceList,
    };
  }

  async list(parameters: ParameterDto) {
    let query = {};
    parameters.id ? (query = { ...query, id: parameters.id }) : noop;
    parameters.memo
      ? (query = { ...query, memo: { contains: parameters.memo } })
      : noop;
    parameters.startDate
      ? (query = { ...query, depositDate: { gte: parameters.startDate } })
      : noop;
    parameters.endDate
      ? (query = { ...query, depositDate: { lte: parameters.endDate } })
      : noop;
    parameters.userName
      ? (query = {
          ...query,
          user: {
            name: { contains: parameters.userName },
          },
        })
      : noop;

    if (parameters.limit) {
      const [total, deposit] = await this.prismaService.$transaction([
        this.prismaService.deposit.count(),
        this.prismaService.deposit.findMany({
          where: query,
          include: {
            user: {
              include: {
                center: true,
              },
            },
          },
          take: Number(parameters.limit),
          skip: Number(parameters.limit) * (Number(parameters.page) - 1),
        }),
      ]);
      return {
        total: total,
        deposits: deposit,
      };
    }
    const total = await this.prismaService.deposit.count({});
    const centers = await this.prismaService.deposit.findMany({});
    return {
      where: query,
      total: total,
      deposits: centers,
    };
  }
  async update() {}
  async create(params: DepositDto) {
    // insert data to database
    const data = params.users.map((userId) => ({
      depositDate: new Date(params.depositDate),
      userId: userId,
      amount: params.amount,
      memo: params.memo,
      fee: params.fee ? 1 : 0,
      status: params.isConfirmed ? 1 : 0,
      isRewarded: params.isRewarded ? 1 : 0,
      method: params.method ? params.method : 0,
    }));
    console.log(data);
    try {
      console.log(params);
      // await this.prismaService.deposit.createMany({
      //   data: data,
      // });
      await this.prismaService.$transaction(
        data.map((datum) => this.prismaService.deposit.create({ data: datum })),
      );
      return await this.prismaService.deposit.findMany();
    } catch (error) {
      if (error.code == 'P2002') {
        console.log(error);
        throw new ForbiddenException('Error in credentials');
      }
    }
  }

  async confirm(params: ConfirmDto) {
    if (
      !params ||
      (params.type != 0 && params.type != 1 && params.type != 2) ||
      params.list.length < 1
    ) {
      throw new ForbiddenException('wrong parameters');
    }
    await this.prismaService.deposit.updateMany({
      where: {
        id: {
          in: params.list,
        },
      },
      data: {
        status: params.type == 1 ? 1 : params.type == 0 ? 0 : 2,
      },
    });
    const list = await this.list(params.query);
    return list;
  }
}
