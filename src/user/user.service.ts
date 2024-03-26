import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prismaService: PrismaService) {}

  async list() {
    const users = await this.prismaService.user.findMany({
      select: {
        email: true,
        name: true,
        option_center: true,
        createdAt: true,
        mobilephone_number: true,
        phone_number: true,
        address: true,
        address1: true,
        addressdoro: true,
      },
    });
    return users;
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
