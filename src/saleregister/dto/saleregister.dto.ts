import { IsNotEmpty, IsString } from 'class-validator';
export class saleregisterDto {
  @IsString()
  id: string;

  @IsString()
  sale_date: string;

  @IsString()
  sale_type: string;

  @IsString()
  meno: string;

  @IsString()
  select_amount: string;

  @IsString()
  @IsNotEmpty()
  sale_amount: string;

  @IsString()
  @IsNotEmpty()
  sale_pv: string;

  @IsString()
  @IsNotEmpty()
  appstatus: string;

  @IsString()
  @IsNotEmpty()
  daily_pay: string;

  @IsString()
  @IsNotEmpty()
  sale_id: string;

  @IsString()
  select_ex_date: string;
}
