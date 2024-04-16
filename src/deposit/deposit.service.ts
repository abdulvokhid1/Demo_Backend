import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { DepositDto, ParameterDto } from './dto';
import { noop } from 'rxjs';

@Injectable()
export class DepositService {
  constructor(private readonly prismaService: PrismaService) {}

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
            name: { contains: parameters.userName},
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
}
