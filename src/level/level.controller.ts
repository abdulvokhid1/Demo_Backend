import { Controller, Get, UseGuards } from '@nestjs/common';
import { MyJwtGuard } from '../auth/guard';
import { LevelService } from './level.service';

@Controller('level')
export class LevelController {
  constructor(private readonly levelService: LevelService) {}

  @UseGuards(MyJwtGuard)
  @Get('list')
  async list() {
    const list = await this.levelService.list();
    return list;
  }
}
