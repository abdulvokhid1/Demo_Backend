import { IsNumber, IsString } from 'class-validator';

export class setupfeeDto {
  @IsString()
  select_fee: string;

  @IsNumber()
  tax: number;

  @IsNumber()
  withdrawal_fee: number;

  @IsNumber()
  transfer_fee: number;

  @IsNumber()
  other_savefee: number;
}
