// import { IsString } from 'class-validator';

export class ParameterDto {
  id?: number;
  startDate?: Date;
  endDate?: Date;
  orderId?: string;
  memo?: string;
  userName?: string;
  page?: number;

  limit?: number;
}

export class DepositDto {
  id?: number;
  depositDate?: string;
  memo?: string;

  users: number[];

  amount: number;

  fee?: boolean;
  isConfirmed: boolean;
  isRewarded?: boolean;

  method?: number;
}

export class ConfirmDto {
  type?: number;
  list: number[];
  query?: DepositDto;
}
