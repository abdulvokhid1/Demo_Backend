import { Module } from '@nestjs/common';
import { SaleslevelController } from './saleslevel.controller';
import { SaleslevelService } from './saleslevel.service';

@Module({
  controllers: [SaleslevelController],
  providers: [SaleslevelService],
})
export class SaleslevelModule {}
