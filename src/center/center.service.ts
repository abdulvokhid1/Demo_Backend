import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CenterService {
  constructor(private prismaService: PrismaService) {}

  async list() {
    const Center = await this.prismaService.center.findMany({
      select: {
        name: true,
        // center_owner: true,
      },
    });
    return Center;
  }
  async update() {
    // const note = await this.prismaService.user.findUnique({
    //   where: {
    //     id: userId,
    //   },
    // });
    // return note;
  }
}
