import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { MyJwtGuard } from '../auth/guard';
import { DepositDto, ParameterDto } from './dto';
import { DepositService } from './deposit.service';

@Controller('deposit')
export class DepositController {
  constructor(private readonly depositService: DepositService) {}

  @UseGuards(MyJwtGuard)
  @Post('list')
  async list(@Body() parameterDto: ParameterDto) {
    // console.log(request.user);
    const list = await this.depositService.list(parameterDto);
    return list;
  }

  // @UseGuards(AuthGuard('jwt'))
  @UseGuards(MyJwtGuard)
  @Get('update')
  async update() {
    // console.log(request.user);
    const center = await this.depositService.update();
    return center;
  }
  // @UseGuards(AuthGuard('jwt'))
  @UseGuards(MyJwtGuard)
  @Post('create')
  async create(@Body() params: DepositDto) {
    // console.log(request.user);
    const deposit = await this.depositService.create(params);
    return deposit;
  }
}
