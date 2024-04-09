import { Controller, Get, UseGuards } from '@nestjs/common';
import { MyJwtGuard } from '../auth/guard';
import { saleregisterService } from './saleregister.service';
@Controller('saleregister')
export class saleregisterController {
  constructor(private saleregisterService: saleregisterService) {}
  @UseGuards(MyJwtGuard)
  @Get('list')
  async list() {
    // console.log(request.user);
    const saleregister = await this.saleregisterService.list();
    return saleregister;
  }

  // @UseGuards(AuthGuard('jwt'))
  @UseGuards(MyJwtGuard)
  @Get('update')
  async update_center() {
    // console.log(request.user);
    const saleregister = await this.saleregisterService.update();
    return saleregister;
  }
}
