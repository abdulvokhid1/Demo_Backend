import { Module } from '@nestjs/common';
import { SetupfeeController } from './setupfee.controller';
import { SetupfeeService } from './setupfee.service';

@Module({
  controllers: [SetupfeeController],
  providers: [SetupfeeService],
})
export class setupfeeModule {}
