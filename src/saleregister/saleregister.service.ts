import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class saleregisterService {
  constructor(private prismaService: PrismaService) {}

  async list() {
    const saleregister = await this.prismaService.center.findMany({
      select: {
        Id: true,
        sale_type: true,
        center_owner: true,
        meno: true,
        select_amount: true,
        sale_amount: true,   
        sale_pv: true,  
        appstatus: true,  
        daiyl_pay: true,
        sale_id: true,
        select_ex_date: true,
      },
    });
    return saleregister;
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
