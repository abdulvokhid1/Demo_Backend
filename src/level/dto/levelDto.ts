import { IsString } from 'class-validator';
import { LevelService } from '../level.service';

export class ParameterDto {
  page?: number;

  limit?: number;
}

export class LevelDto {
  id?: number;
  title?: string;
  description?: string;
  rank?: number;
  minBuy?: number;
  minSell?: number;
  minSub?: number;
  discountRate?: number;
  rewardRate?: number;
  bgColor?: string;
  txtColor?: string;
}

export class LevelParamsDto {
  levels: LevelDto[];
}
