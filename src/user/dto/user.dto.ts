// import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class ParameterDto {
  id?: number;
  memberId?: string;
  name?: string;
  level?: number;
  page?: number;
  limit?: number;
}

export class SponsorListDto {
  memberId?: string;
}

export class SponsorResponseType {
  id?: number;
  name?: string;
  member_id?: string;
  recomid?: number;
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
