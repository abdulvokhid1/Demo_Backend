import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CenterDto, ParameterDto } from './dto';

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
  async create(centerParam: CenterDto) {
    const existCenter = await this.prismaService.center.findFirst({
      // where: { owner: centerParam.owner },
    });
    if (existCenter) {
      throw new ForbiddenException('Center already exists');
    }

    // insert data to database
    try {
      const center = await this.prismaService.center.create({
        data: {
          name: centerParam.name,
          // owner: centerParam.owner,
        },
      });
      return center;
    } catch (error) {
      if (error.code == 'P2002') {
        console.log(error);
        throw new ForbiddenException('Error in credentials');
      }
    }
  }
}
