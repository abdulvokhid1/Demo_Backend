import { Controller, Get, UseGuards } from '@nestjs/common';
import { CenterService } from './center.service';
import { MyJwtGuard } from '../auth/guard';

@Controller('center')
export class CenterController {
  constructor(private readonly centerService: CenterService) {}

  @UseGuards(MyJwtGuard)
  @Get('list')
  async list(param) {
    const list = await this.centerService.list();
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
