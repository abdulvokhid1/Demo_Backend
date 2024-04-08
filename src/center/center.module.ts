import { Module } from '@nestjs/common';
import { centerController } from './center.controller';
import { CenterService } from './center.service';

@Module({
  controllers: [centerController],
  providers: [CenterService],
})
export class CenterModule {}
