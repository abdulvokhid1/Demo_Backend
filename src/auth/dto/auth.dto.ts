import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class AuthRegisterDto {
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsNotEmpty()
  mobilephone_number: string;

  // @IsString()
  phone_number: string;

  // @IsString()
  zip1: string;

  // @IsString()
  zip2: string;

  // @IsString()
  address: string;

  // @IsString()
  address1: string;

  // @IsString()
  addressdoro: string;

  // @IsString()
  zonecode: string;

  // @IsString()
  option_center: string;

  // @IsString()
  recomid: string;

  // @IsString()
  sponid: string;

  // @IsString()
  return_bank: string;

  // @IsString()
  return_account: string;

  // @IsString()
  return_name: string;
}
