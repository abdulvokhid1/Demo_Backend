import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class CenterService {
  constructor(private readonly prismaService: PrismaService) {}

  async list() {
    const centers = await this.prismaService.center.findMany();
    return centers;
  }
  async update() {}
}
