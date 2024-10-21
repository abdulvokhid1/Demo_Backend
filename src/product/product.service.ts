import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ParameterDto, ProductDto } from './dto';
import noop from 'noop-ts';

@Injectable()
export class ProductService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(params: ProductDto) {
    if (!params || !params.name || !params.code || !params.catIds?.length) {
      throw new ForbiddenException('PRODUCT_NOT_ENOUGH_INFO');
    }

    const newProd = await this.prismaService.product.create({
      data: {
        name: params.name,
        isActive: params.isActive,
        code: params.code,
        customercode: params.customercode,
        price_origin: params.price_origin,
        price_sell: params.price_sell,
        price_provider: params.price_provider,
        vat: params.vat,
        quantity: params.quantity,
        producer: params.producer,
        origin: params.origin,
        branch: params.branch,
        short_desc: params.short_desc,
        is_guide_img: params.is_guide_img,
        guide_img_id: params.guide_img_id,
        guide_info: params.guide_info,
        is_prod_info_img: params.is_prod_info_img,
        prod_img_id: params.prod_img_id,
        prod_info: params.prod_info,
        is_description_img: params.is_description_img,
        description_img_id: params.description_img_id,
        description: params.description,
        // description_m: string,
        mainImg: params.mainImg || null,
        listImg: params.listImg || null,
        thumbnailImg: params.thumbnailImg || null,
        extraImg1: params.extraImg1 || null,
        extraImg2: params.extraImg2 || null,
        extraImg3: params.extraImg3 || null,
        extraImg4: params.extraImg4 || null,
        extraImg5: params.extraImg5 || null,
      },
    });

    Promise.all(
      params.catIds.map(async (catId) => {
        await this.prismaService.categoryProduct.create({
          data: {
            productId: newProd.id,
            categoryId: catId,
          },
        });
      }),
    );
    return newProd;
  }

  async update(params: ProductDto) {
    if (!params || !params.id) {
      throw new ForbiddenException('PRODUCT_NOT_ENOUGH_INFO');
    }
    let data = {};
    params.name ? (data = { ...data, name: params.name }) : noop;
    params.isActive != undefined
      ? (data = { ...data, isActive: params.isActive })
      : noop;
    // params.imgId ? (data = { ...data, img: params.imgId }) : noop;
    const newProduct = await this.prismaService.product.update({
      where: {
        id: params.id,
      },
      data: data,
    });
    return newProduct;
  }

  async list_without_access(params: ParameterDto) {
    let query = {};
    params?.name
      ? (query = { ...query, name: { contains: params.name } })
      : noop;
    params?.code
      ? (query = { ...query, code: { contains: params.code } })
      : noop;
    params?.isActive != undefined
      ? (query = { ...query, isActive: params.isActive })
      : noop;

    if (params?.limit) {
      const [total, products] = await this.prismaService.$transaction([
        this.prismaService.product.count({
          where: query,
        }),
        this.prismaService.product.findMany({
          where: query,
          include: {
            categories: { include: { category: true } },
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
          take: Number(params.limit),
          skip: Number(params.limit) * (Number(params.page) - 1),
        }),
      ]);
      return {
        total: total,
        products: products,
      };
    }
    const total = await this.prismaService.product.count({
      where: query,
    });
    const products = await this.prismaService.product.findMany({
      where: query,
      include: {
        categories: { include: { category: true } },
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
    });

    return {
      total: total,
      products: products,
    };
  }

  async list_product_by_cat(params: ParameterDto) {
    if (!params || !params.catId)
      throw new ForbiddenException('NO_CATID_NOT_ENOUGH_INFO');
    const list = await this.prismaService.categoryProduct.findMany({
      where: {
        categoryId: params.catId,
      },
      include: {
        product: true,
      },
    });
    return list;
  }

  async detail(params: ParameterDto) {
    if (!params || !params.id)
      throw new ForbiddenException('PRODUCT_NOT_ENOUGH_INFO');

    const prod = await this.prismaService.product.findUnique({
      where: {
        id: params.id,
      },
      include: {
        categories: { include: { category: true } },
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
    });
    return prod;
  }
}
