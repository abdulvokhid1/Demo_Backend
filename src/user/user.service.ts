import { Injectable } from '@nestjs/common';
import {Paginated, QueryParameters} from "@mirrom/nestjs-prisma-pagination";
import { PrismaService } from '../prisma/prisma.service';
import { ParameterDto } from "./dto";

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async list(parameters: ParameterDto) {
    const [total, users] = await this.prismaService.$transaction([
      this.prismaService.user.count(),
      this.prismaService.user.findMany({
        include: {
          center: true,
          Level: true,
        },
        take: parameters.limit,
        skip: parameters.limit * (parameters.page - 1),
      }),
    ]);

    // const users = await this.prismaService.user.findMany({
    //   select: {
    //     email: true,
    //     name: true,
    //     member_id: true,
    //     centerId: true,
    //     createdAt: true,
    //     mobilephone_number: true,
    //     phone_number: true,
    //     address: true,
    //     address1: true,
    //     addressdoro: true,
    //     sponid: true,
    //     recomid: true,
    //   },
    //   // include:{
    //   //   center: true,
    //   // },
    // });
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
