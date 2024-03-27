import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CenterService {
  constructor(private prismaService: PrismaService) {}

  async list() {
    const Center = await this.prismaService.center.findMany({
      select: {
        linked_Id: true,
        center_name: true,
        center_owner: true,
       },
    });
    return Center;
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
