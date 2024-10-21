import { IsString } from 'class-validator';

export class ParameterDto {
  page?: number;

  limit?: number;
}

export class CenterDto {
  @IsString()
  name: string;

  owner: number;
}
