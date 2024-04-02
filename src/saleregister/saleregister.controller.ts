import { Controller, Get, UseGuards } from '@nestjs/common';
import { MyJwtGuard } from '../auth/guard';
import { SaleRegisterService } from './saleregister.service';

@Controller('saleregister')
export class saleregisterController {
  constructor(private saleRegisterService: SaleRegisterService) {}

  @UseGuards(MyJwtGuard)
  @Get('list')
  async list() {
    // console.log(request.user);
    const saleregister = await this.saleRegisterService.list();
    return saleregister;
  }

  // @UseGuards(AuthGuard('jwt'))
  @UseGuards(MyJwtGuard)
  @Get('update')
  async update_center() {
    // console.log(request.user);
    const saleregister = await this.saleRegisterService.update();
    return saleregister;
  }
}
