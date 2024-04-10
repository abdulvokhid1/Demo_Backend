import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ParameterDto } from './dto';

@Injectable()
export class CenterService {
  constructor(private readonly prismaService: PrismaService) {}

  async list(parameters: ParameterDto) {
    if (parameters.limit) {
      const [total, centers] = await this.prismaService.$transaction([
        this.prismaService.center.count(),
        this.prismaService.center.findMany({
          take: Number(parameters.limit),
          skip: Number(parameters.limit) * (Number(parameters.page) - 1),
        }),
      ]);
      return {
        total: total,
        centers: centers,
      };
    }
    const total = await this.prismaService.center.count({});
    const centers = await this.prismaService.center.findMany({});
    return {
      total: total,
      centers: centers,
    };
  }
  async update() {}
}
