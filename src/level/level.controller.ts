import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { MyJwtGuard } from '../auth/guard';
import { LevelService } from './level.service';
import { LevelParamsDto } from './dto/levelDto';

@Controller('level')
export class LevelController {
  constructor(private readonly levelService: LevelService) {}

  @UseGuards(MyJwtGuard)
  @Get('list')
  async list() {
    const list = await this.levelService.list();
    return list;
  }

  @UseGuards(MyJwtGuard)
  @Post('update')
  async update(@Body() params: LevelParamsDto) {
    const list = await this.levelService.update(params);
    return list;
  }
}
