import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { LevelDto, LevelParamsDto } from './dto/levelDto';

@Injectable()
export class LevelService {
  constructor(private readonly prismaService: PrismaService) {}

  async list() {
    const levels = await this.prismaService.companyLevel.findMany();
    return levels;
  }

  async update(params: LevelParamsDto) {
    console.log(params);
    await Promise.all(
      params.levels.map(async (level: LevelDto) => {
        await this.prismaService.companyLevel.update({
          where: { id: level.id },
          data: {
            title: level.title,
            description: level.description,
            minSub: level.minSub,
            minBuy: level.minBuy,
            minSell: level.minSell,
            discountRate: level.discountRate,
            rewardRate: level.rewardRate,
            bgColor: level.bgColor,
            txtColor: level.txtColor,
          },
        });
      }),
    );

    const levels = await this.prismaService.companyLevel.findMany();
    return levels;
  }
}
