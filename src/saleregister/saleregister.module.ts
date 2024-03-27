import { Module } from '@nestjs/common';
import { saleregisterController } from './saleregister.controller';
import { saleregisterService } from './saleregister.service';

@Module({
  controllers: [saleregisterController],
  providers: [saleregisterService],
})
export class saleregisterModule {}
