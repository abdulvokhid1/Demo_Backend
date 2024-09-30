import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  CalculationCompletionQueryType,
  CalculationCompletionType,
  ConfirmDto,
  DepositByUserDto,
  DepositDto,
  ParameterDto,
  ParameterListByUserIdDto,
} from './dto';
import { noop } from 'rxjs';
import moment from 'moment-timezone';
import { LevelDto } from '../level/dto';

@Injectable()
export class DepositService {
  constructor(private readonly prismaService: PrismaService) {}

  async confirm_calculation(params: CalculationCompletionType) {
    if (!params || !params.item.length)
      throw new ForbiddenException('no record');
    await Promise.all(
      params.item.map(async (item: CalculationCompletionQueryType) => {
        await this.prismaService.calculation.create({
          data: {
            user: {
              connect: {
                id: item.userId,
              },
            },
            userLevel: item.levelId,
            reward: item.rewardAmount,
            tax: (item.rewardAmount * 3.3) / 100,
            realReward: (item.rewardAmount * 96.7) / 100,
            // memo: null,
            startDate: item.startDate,
            endDate: item.endDate,
          },
        });
        // await Promise.all(
        //   item.deposits.map(async (i: number) => {
        //     await this.prismaService.deposit.update({
        //       where: {
        //         id: i,
        //       },
        //       data: {
        //         canculation: {
        //           connect: {
        //             id: i,
        //           },
        //         },
        //         isCalculated: true,
        //       },
        //     });
        //   }),
        // );
      }),
    );

    const newCals = await this.prismaService.calculation.findMany({
      orderBy: {
        id: 'desc',
      },
      take: params.item.length,
    });
    newCals.map(async (item, index) => {
      const parameter: number[] = [];
      params.item.map((param) => {
        param.userId == item.userId ? parameter.push(...param.deposits) : noop;
      });
      await Promise.all(
        parameter.map(async (deposit) => {
          await this.prismaService.deposit.update({
            where: {
              id: deposit,
            },
            data: {
              calId: item.id,
            },
          });
        }),
      );
      console.log(item);
    });
  }
  async confirm_calculation_bk(params: ParameterDto) {
    const startDate = moment(params.startDate).format('YYYY-MM-DD');
    const endDate = moment(params.endDate).format('YYYY-MM-DD');

    const list = await this.prismaService.$queryRaw`
      select users.id id, users.name name, users.member_id memberId, users.sub1, users.sub2, users.return_account bankAccount,
         (select subuser.member_id from users subuser where users.sub1 = subuser.id ) sub1MemberId,
         (select subuser.member_id from users subuser where users.sub2 = subuser.id ) sub2MemberId,
         company_levels.title levelTitle, sum(company_levels.rewardRate) rewardAmount
      from users
               join users as sub on users.id = sub.recomid
               join deposit  on sub.id = deposit.userId
               join company_levels on users.levelId = company_levels.id
      where depositDate >= ${startDate}
          and depositDate <= ${endDate}
          and deposit.amount <> 0
          and deposit.status = 1
          and sub.id <>  users.sub1
          and sub.id <> users.sub2
      group by users.id
      order by users.id;`;
    return {
      list: list,
    };
  }
  async calculation_detail_list(params: ParameterDto) {
    // const offset = Number(params.limit) * (Number(params.page) - 1) || 0;
    // const limit = Number(params.limit) || 10;
    const startDate = moment(params.startDate).format('YYYY-MM-DD');
    const endDate = moment(params.endDate).format('YYYY-MM-DD');

    const list = await this.prismaService.$queryRaw`
        select users.id id, users.name name, users.member_id memberId, users.sub1 sub1Id, users.sub2 sub2Id, users.return_account bankAccount,
               #        (select subuser.id from users subuser where users.sub1 = subuser.id ) sub1Id,
               (select subuser.name from users subuser where users.sub1 = subuser.id ) sub1Name,
               #        (select subuser.id from users subuser where users.sub2 = subuser.id ) sub2Id,
               (select subuser.name from users subuser where users.sub2 = subuser.id ) sub2Name,
               sub.id subId, sub.name subName, sub.member_id subMemberId,
               company_levels.id levelId, company_levels.title levelTitle, company_levels.rewardRate rewardAmount,
               deposit.id saleId, deposit.depositDate saleDate, deposit.amount saleAmount, deposit.memo memo
        from users
                 join users as sub on users.id = sub.recomid
                 join deposit  on sub.id = deposit.userId
                 join company_levels on users.levelId = company_levels.id
        where depositDate >= ${startDate}
          and depositDate <= ${endDate}
          and deposit.isCalculated = false
          and deposit.amount <> 0
          and deposit.status = 1
          and sub.id <>  users.sub1
          and sub.id <> users.sub2
        and deposit.calId is NULL
        order by users.id, sub.id;
    `;
    const selfBalanceList = await this.prismaService.$queryRaw`
        select users.id id,  users.name, depositDate saleDate, sum(if(deposit.status = 1, deposit.amount, 0)) selfBalance
        from users
                 left join deposit  on users.id = deposit.userId
        where (depositDate >= ${startDate}
                   and depositDate <= ${endDate} 
                   and deposit.amount is not NULL 
                   and deposit.status = 1
                   and deposit.calId is NULL
                    ) 
           or deposit.amount is NULL or deposit.status = 0
        group by users.id
        order by users.id;
    `;
    // console.log(list);
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
            and depositDate <= ${endDate} 
                   and deposit.isCalculated = false
                   and deposit.amount is not NULL 
                   and status = 1) 
           or deposit.amount is null
        group by users.id, sub.id
        order by users.id, sub.id;
    `;
    const selfBalanceList = await this.prismaService.$queryRaw`
        select users.id id,  users.name, depositDate saleDate, sum(if(deposit.status = 1, deposit.amount, 0)) selfBalance
        from users
                 left join deposit  on users.id = deposit.userId
        where (depositDate >= ${startDate}
                   and depositDate <= ${endDate}
                   and deposit.isCalculated = false
                   and deposit.amount is not NULL 
                   and deposit.status = 1) or deposit.amount is NULL or deposit.status = 0
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

  async listByUserId(parameters: ParameterListByUserIdDto) {
    if (!parameters.id) {
      throw new ForbiddenException('Not enough parameters - No ID');
    }

    if (parameters.limit) {
      const [total, deposit] = await this.prismaService.$transaction([
        this.prismaService.deposit.count({ where: { userId: parameters.id } }),
        this.prismaService.deposit.findMany({
          where: { userId: parameters.id },
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
    const total = await this.prismaService.deposit.count({
      where: { userId: parameters.id },
    });
    const centers = await this.prismaService.deposit.findMany({});
    return {
      where: { userId: parameters.id },
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

  async createByUser(params: DepositByUserDto, user: any) {
    // insert data to database

    const data = {
      depositDate: new Date(),
      userId: user.id,
      amount: params.amount,
      memo: params.memo,
      fee: params.fee ? 1 : 0,
      status: params.isConfirmed ? 1 : 0,
      isRewarded: params.isRewarded ? 1 : 0,
      method: params.method ? params.method : 0,
    };
    console.log(data);
    try {
      await this.prismaService.deposit.create({ data: data });
      return await this.prismaService.deposit.findMany({
        where: { userId: Number(user.id) },
      });
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
