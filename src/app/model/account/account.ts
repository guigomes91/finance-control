import { AccountPlan } from '../account-plan/account-plan';
import { AccountStatus } from './enum-account-status';

export interface Account {
  id: string;
  due: Date;
  payment: Date;
  portion: number;
  amount: number;
  type: AccountPlan;
  description: string;
  status: AccountStatus
}
