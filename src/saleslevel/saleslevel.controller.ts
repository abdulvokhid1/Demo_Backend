import { Controller, Get, UseGuards } from '@nestjs/common';
import { MyJwtGuard } from '../auth/guard';
import { SaleslevelService } from './saleslevel.service';

@Controller('sales_level')
export class SaleslevelController {
  constructor(private saleslevelService: SaleslevelService) {}

  @UseGuards(MyJwtGuard)
  @Get('list')
  async list() {
    // console.log(request.user);
    const levels = await this.saleslevelService.list();
    return levels;
  }
  
  @UseGuards(MyJwtGuard)
  @Get('update')
  async update_level() {
    // console.log(request.user);
    const users = await this.saleslevelService.update();
    return users;
  }

}
