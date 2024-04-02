import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class LevelService {
  constructor(private readonly prismaService: PrismaService) {}

  async list() {
    const levels = await this.prismaService.companyLevel.findMany();
    return levels;
  }
}
