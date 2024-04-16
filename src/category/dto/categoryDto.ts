import { IsString } from 'class-validator';

export class ParameterDto {
  page?: number;

  limit?: number;
}

export class CategoryDto {
  @IsString()
  name: string;

  owner: number;
}
