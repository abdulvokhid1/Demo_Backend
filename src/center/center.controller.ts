import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { CenterService } from './center.service';
import { MyJwtGuard } from '../auth/guard';
import { ParameterDto } from './dto';

@Controller('center')
export class CenterController {
  constructor(private readonly centerService: CenterService) {}

  @UseGuards(MyJwtGuard)
  @Post('list')
  async list(@Body() parameterDto: ParameterDto) {
    // console.log(request.user);
    const list = await this.centerService.list(parameterDto);
    return list;
  }

  // @UseGuards(AuthGuard('jwt'))
  @UseGuards(MyJwtGuard)
  @Get('update')
  async update_center() {
    // console.log(request.user);
    const center = await this.centerService.update();
    return center;
  }
}
