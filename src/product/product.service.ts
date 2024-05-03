import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ProductDto } from './dto';

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
        mainImg: params.mainImg,
        listImg: params.listImg,
        // thumbnailImg: number,
        extraImg1: params.extraImg1 || 0,
        extraImg2: params.extraImg2 || 0,
        extraImg3: params.extraImg3 || 0,
        extraImg4: params.extraImg4 || 0,
        extraImg5: params.extraImg5 || 0,
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
}
