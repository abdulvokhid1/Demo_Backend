import { Controller, Get, UseGuards } from '@nestjs/common';
import { MyJwtGuard } from '../auth/guard';
import { SetupfeeService } from './setupfee.service';

@Controller('setupfee')
export class SetupfeeController {
  constructor(private setupFeeService: SetupfeeService) {}

  @UseGuards(MyJwtGuard)
  @Get('list')
  async list() {
    // console.log(request.user);
    const setupFeee = await this.setupFeeService.list();
    return setupFeee;
  }

  // @UseGuards(AuthGuard('jwt'))
  @UseGuards(MyJwtGuard)
  @Get('update')
  async update_center() {
    // console.log(request.user);
    const setupFee = await this.setupFeeService.update();
    return setupFee;
  }
}
