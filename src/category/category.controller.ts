import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { MyJwtGuard } from '../auth/guard';
import { ParameterDto } from './dto';
import { CategoryService } from './category.service';
import { CategoryDto } from './dto';

@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(MyJwtGuard)
  @Post('list')
  async list(@Body() parameterDto: ParameterDto) {
    // console.log(request.user);
    const list = await this.categoryService.list(parameterDto);
    return list;
  }

  // @UseGuards(AuthGuard('jwt'))
  @UseGuards(MyJwtGuard)
  @Get('update')
  async update() {
    // console.log(request.user);
    const category = await this.categoryService.update();
    return category;
  }
  // @UseGuards(AuthGuard('jwt'))
  @UseGuards(MyJwtGuard)
  @Get('update')
  async create(@Body() params: CategoryDto) {
    // console.log(request.user);
    const category = await this.categoryService.create(params);
    return category;
  }
}
