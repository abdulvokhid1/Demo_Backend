import { Module } from '@nestjs/common';
import { setupfeeController } from './setupfee.controller';
import { setupfeeService } from './setupfee.service';

@Module({
  controllers: [setupfeeController],
  providers: [setupfeeService],
})
export class setupfeeModule {}
