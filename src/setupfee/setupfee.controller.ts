import { Controller, Get, UseGuards } from '@nestjs/common';
import { MyJwtGuard } from '../auth/guard';
import { setupfee } from './setupfee.service';

@Controller('setupfee')
export class SetupfeeController {
  constructor(private SetupfeeService: SetupfeeService) {}

  @UseGuards(MyJwtGuard)
  @Get('list')
  async list() {
    // console.log(request.user);
    const Setupfee = await this.Setupfee.Service.list();
    return Setupfee;
  }

  // @UseGuards(AuthGuard('jwt'))
  @UseGuards(MyJwtGuard)
  @Get('update')
  async update_center() {
    // console.log(request.user);
    const Setupfee = await this.Setupfee.Service.update();
    return Setupfee;
  }
}
