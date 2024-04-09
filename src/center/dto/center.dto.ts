import { IsString } from 'class-validator';

export class ParameterDto {
  page?: number;

  limit?: number;
}

export class centerDto {
  @IsString()
  id: string;

  @IsString()
  linkedId: string;

  @IsString()
  center_name: string;

  @IsString()
  center_owner: string;
}
