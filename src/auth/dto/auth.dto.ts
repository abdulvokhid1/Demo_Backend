import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class AuthDto {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class AuthUserDto {
  @IsString()
  @IsNotEmpty()
  memberId: string;

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

  @IsString()
  @IsNotEmpty()
  member_id: string;

  // @IsBoolean()
  isDeleted: boolean;

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
  centerId: string;

  // @IsString()
  levelId: string;

  // @IsString()
  recomid: number;

  // @IsString()
  sponid: number;

  // @IsString()
  return_bank: string;

  // @IsString()
  return_account: string;

  // @IsString()
  return_name: string;
}
export class AuthUserRegisterDto {
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

  @IsString()
  @IsNotEmpty()
  member_id: string;

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
  centerId: string;

  // @IsString()
  levelId: string;

  // @IsString()
  recomid: number;

  // @IsString()
  // sponid: number;

  // @IsString()
  return_bank: string;

  // @IsString()
  return_account: string;

  // @IsString()
  return_name: string;

  // @IsBoolean()
  isDeleted: boolean;
}
