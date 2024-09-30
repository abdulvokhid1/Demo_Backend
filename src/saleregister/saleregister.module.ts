import { Module } from '@nestjs/common';
import { saleregisterController } from './saleregister.controller';
import { SaleregisterService } from './saleregister.service';
@Module({
  controllers: [saleregisterController],
  providers: [SaleregisterService],
})
export class saleregisterModule {}
