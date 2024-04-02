import { Module } from '@nestjs/common';
import { saleregisterController } from './saleregister.controller';
import { SaleRegisterService } from './saleregister.service';

@Module({
  controllers: [saleregisterController],
  providers: [SaleRegisterService],
})
export class saleregisterModule {}
