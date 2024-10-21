import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CategoryDto, ParameterDto } from './dto';
import noop from 'noop-ts';

@Injectable()
export class CategoryService {
  constructor(private readonly prismaService: PrismaService) {}

  async list(params: ParameterDto) {
    if (params?.parent) {
      const list = await this.prismaService.category.findMany({
        where: {
          depth: params?.depth || 1,
          isActive: true,
          parentid: params?.parent || 0,
        },
        include: {
          products: {
            include: {
              product: {
                include: {
                  mainlocal: true,
                  listlocal: true,
                  thumbnaillocal: true,
                  guideLocal: true,
                  prodLocal: true,
                  descLocal: true,
                  extralocal1: true,
                  extralocal2: true,
                  extralocal3: true,
                  extralocal4: true,
                  extralocal5: true,
                },
              },
            },
          },
        },
        orderBy: {
          order: params?.asc ? 'asc' : 'desc',
        },
      });
      return list;
    } else if (params?.depth <= 1) {
      const list = await this.prismaService.category.findMany({
        where: {
          depth: params?.depth || 1,
          isActive: true,
        },
        include: {
          products: {
            include: {
              product: {
                include: {
                  mainlocal: true,
                  listlocal: true,
                  thumbnaillocal: true,
                  guideLocal: true,
                  prodLocal: true,
                  descLocal: true,
                  extralocal1: true,
                  extralocal2: true,
                  extralocal3: true,
                  extralocal4: true,
                  extralocal5: true,
                },
              },
            },
          },
        },
        orderBy: {
          order: params?.asc ? 'asc' : 'desc',
        },
      });
      return list;
    }
  }
  async update(params: CategoryDto) {
    if (!params || !params.id || !params.name) {
      throw new ForbiddenException('CATEGORY_NOT_ENOUGH_INFO');
    }
    if (params.depth > 1 && !params.parentId) {
      throw new ForbiddenException(
        'CATEGORY_NO_PARENT_WITH_DEPTH_' + params.depth,
      );
    }
    let data = {};
    params.name ? (data = { ...data, name: params.name }) : noop;
    params.isActive != undefined
      ? (data = { ...data, isActive: params.isActive })
      : noop;
    params.imgId ? (data = { ...data, img: params.imgId }) : noop;
    const newCat = await this.prismaService.category.update({
      where: {
        id: params.id,
      },
      data: data,
    });
    return newCat;
  }
  async create(params: CategoryDto) {
    if (!params || !params.name || !params.imgId) {
      throw new ForbiddenException('CATEGORY_NOT_ENOUGH_INFO');
    }

    if (params.depth > 1 && !params.parentId) {
      throw new ForbiddenException(
        'CATEGORY_NO_PARENT_WITH_DEPTH_' + params.depth,
      );
    }

    const newCat = params.parentId
      ? await this.prismaService.category.create({
          data: {
            name: params.name,
            img: params.imgId || 0,
            isActive: params.isActive,
            depth: params.depth || 1,
            parent: {
              connect: {
                id: params.parentId,
              },
            },
          },
        })
      : await this.prismaService.category.create({
          data: {
            name: params.name,
            img: params.imgId || 0,
            isActive: params.isActive,
            depth: params.depth || 1,
          },
        });

    const total = await this.prismaService.category.count({
      where: {
        parentid: params.parentId,
      },
    });
    const category = await this.prismaService.category.update({
      where: {
        id: newCat.id,
      },
      data: {
        order: total,
      },
    });
    return category;
  }
}
