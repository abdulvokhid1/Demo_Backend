import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { MyJwtGuard } from '../auth/guard';
import { ProductDto } from '../product/dto';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  // @UseGuards(AuthGuard('jwt'))
  @UseGuards(MyJwtGuard)
  @Post('create')
  async create(@Body() params: ProductDto) {
    // console.log(request.user);
    const product = await this.productService.create(params);
    return product;
  }
}
