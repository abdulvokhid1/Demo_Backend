import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ParameterDto } from './dto';
import { noop } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async list(parameters: ParameterDto) {
    let query = {};
    parameters.id ? (query = { ...query, id: parameters.id }) : noop;
    parameters.memberId
      ? (query = { ...query, member_id: { contains: parameters.memberId } })
      : noop;
    parameters.name
      ? (query = { ...query, name: { contains: parameters.name } })
      : noop;
    parameters.level ? (query = { ...query, level: parameters.level }) : noop;

    if (parameters.limit) {
      const [total, users] = await this.prismaService.$transaction([
        this.prismaService.user.count({
          where: query,
        }),
        this.prismaService.user.findMany({
          where: query,
          include: {
            center: true,
            Level: true,
            recom: true,
            subs: true,
          },
          take: Number(parameters.limit),
          skip: Number(parameters.limit) * (Number(parameters.page) - 1),
        }),
      ]);
      users.map((item) => {
        delete item['hashedPassword'];
      });
      return {
        total: total,
        users: users,
      };
    }
    const total = await this.prismaService.user.count({
      where: query,
    });
    const users = await this.prismaService.user.findMany({
      where: query,
      include: {
        center: true,
        Level: true,
        subs: true,
      },
    });
    return {
      total: total,
      users: users,
    };
  }

  async me(userId: number) {
    const note = await this.prismaService.user.findUnique({
      where: {
        id: userId,
      },
    });
    return note;
  }
}
