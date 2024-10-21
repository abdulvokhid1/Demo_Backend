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

export class ParameterListByUserIdDto {
  id?: number;
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

export class DepositByUserDto {
  id?: number;
  depositDate?: string;
  memo?: string;

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

export type CalculationCompletionType = {
  item: CalculationCompletionQueryType[];
};

export type CalculationCompletionQueryType = {
  id?: number;
  startDate: Date;
  endDate: Date;
  userId: number;
  name: string;
  memberId: string;
  levelId?: number;
  levelTitle?: string;
  rewardAmount: number;
  bankAccount?: string;
  deposits: number[];
};
