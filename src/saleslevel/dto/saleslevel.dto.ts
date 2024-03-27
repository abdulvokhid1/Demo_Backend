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
    level: String;

    @IsString()
    @IsNotEmpty()
    position_name: String;

    @IsString()
    @IsNotEmpty()
    purchase_amount: String;

    @IsString()
    @IsNotEmpty()
    amount_limit: String;

    @IsString()
    @IsNotEmpty()
    purchase_pv: String;

    @IsString()
    @IsNotEmpty()
    discount_rate: String;

    @IsString()
    @IsNotEmpty()
    guanli_fee: String;

    @IsString()
    @IsNotEmpty()
    minimum_purchase: String;

    @IsString()
    @IsNotEmpty()
    upgrade:String;

    @IsString()
    @IsNotEmpty()
    payment_limit: String;

    @IsString()
    @IsNotEmpty()
    memo: String;
}