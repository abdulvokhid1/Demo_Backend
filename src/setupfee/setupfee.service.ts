import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SetupfeeService {
  constructor(private prismaService: PrismaService) {}

  async list() {
    const Setupfee = await this.prismaService.setupfee.findMany({
      select: {
        id: true,
        tax: true,
        withdrawal_fee: true,
        transfer_fee: true,
        other_savefee: true,
      },
    });
    return Setupfee;
  }
  async update(){}
}
