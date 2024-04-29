import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { MyJwtGuard } from '../auth/guard';
import { CalculationCompletionType, ConfirmDto, DepositDto, ParameterDto } from './dto';
import { DepositService } from './deposit.service';

@Controller('deposit')
export class DepositController {
  constructor(private readonly depositService: DepositService) {}

  @UseGuards(MyJwtGuard)
  @Post('confirm_calculation')
  async confirmCalculation(@Body() parameterDto: CalculationCompletionType) {
    const list = await this.depositService.confirm_calculation(parameterDto);
    return list;
  }

  @UseGuards(MyJwtGuard)
  @Post('calculation_detail_list')
  async calculationDetailList(@Body() parameterDto: ParameterDto) {
    const list =
      await this.depositService.calculation_detail_list(parameterDto);
    return list;
  }

  @UseGuards(MyJwtGuard)
  @Post('calculation_list')
  async groupList(@Body() parameterDto: ParameterDto) {
    const list = await this.depositService.calculation_list(parameterDto);
    return list;
  }

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

  @UseGuards(MyJwtGuard)
  @Post('confirm')
  async confirm(@Body() params: ConfirmDto) {
    // console.log(request.user);
    const deposits = await this.depositService.confirm(params);
    return deposits;
  }
}
