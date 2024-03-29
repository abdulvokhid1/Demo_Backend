import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class saleslevelDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class saleslevelRegisterDto {
  @IsNotEmpty()
  level: string;

  @IsString()
  @IsNotEmpty()
  position_name: string;

  @IsString()
  @IsNotEmpty()
  purchase_amount: string;

  @IsString()
  @IsNotEmpty()
  amount_limit: string;

  @IsString()
  @IsNotEmpty()
  purchase_pv: string;

  @IsString()
  @IsNotEmpty()
  discount_rate: string;

  @IsString()
  @IsNotEmpty()
  guanli_fee: string;

  @IsString()
  @IsNotEmpty()
  minimum_purchase: string;

  @IsString()
  @IsNotEmpty()
  upgrade: string;

  @IsString()
  @IsNotEmpty()
  payment_limit: string;

  @IsString()
  @IsNotEmpty()
  memo: string;
}
