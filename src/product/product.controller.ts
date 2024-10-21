import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { MyJwtGuard } from '../auth/guard';
import { ProductDto, ParameterDto } from './dto';

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

  @UseGuards(MyJwtGuard)
  @Post('update')
  async update(@Body() params: ProductDto) {
    // console.log(request.user);
    const product = await this.productService.update(params);
    return product;
  }

  @Post('list_without_access')
  async list_without_access(@Body() parameterDto: ParameterDto) {
    // console.log(request.user);
    const list = await this.productService.list_without_access(parameterDto);
    return list;
  }

  @Post('list_product_by_cat')
  async list_product_by_cat(@Body() parameterDto: ParameterDto) {
    // console.log(request.user);
    const list = await this.productService.list_product_by_cat(parameterDto);
    return list;
  }

  @Post('detail')
  async detail(@Body() params: ParameterDto) {
    // console.log(request.user);
    const prod = await this.productService.detail(params);
    return prod;
  }
}
