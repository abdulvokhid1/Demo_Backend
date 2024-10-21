// import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

import { IsBoolean, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class UserUpdateDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  password: string;

  @IsString()
  @IsNotEmpty()
  mobilephone_number: string;

  // @IsBoolean()
  isDeleted: boolean;

  // @IsString()
  phone_number: string;

  // @IsString()
  member_id: string;

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

export class ParameterDto {
  id?: number;
  memberId?: string;
  name?: string;
  level?: number;
  page?: number;
  limit?: number;
}

export class UserInfoDto {
  id?: number;
  memberId?: string;
}

export class SponsorListDto {
  memberId?: string;
}

export class SponsorResponseType {
  id?: number;
  name?: string;
  member_id?: string;
  recomid?: number;
  sponid?: number;
  createdAt?: string;
  level?: string;
  children?: SponsorResponseType[];
}
// export class AuthRegisterDto {
//   @IsNotEmpty()
//   name: string;
//
//   @IsEmail()
//   @IsNotEmpty()
//   email: string;
//
//   @IsString()
//   @IsNotEmpty()
//   password: string;
//
//   @IsString()
//   @IsNotEmpty()
//   mobilephone_number: string;
//
//   // @IsString()
//   phone_number: string;
//
//   // @IsString()
//   zip1: string;
//
//   // @IsString()
//   zip2: string;
//
//   // @IsString()
//   address: string;
//
//   // @IsString()
//   address1: string;
//
//   // @IsString()
//   addressdoro: string;
//
//   // @IsString()
//   zonecode: string;
//
//   // @IsString()
//   centerId?: number;
//
//   // @IsString()
//   recomid: string;
//
//   // @IsString()
//   sponid: string;
//
//   levelId?: number;
//
//   // @IsString()
//   return_bank: string;
//
//   // @IsString()
//   return_account: string;
//
//   // @IsString()
//   return_name: string;
// }
