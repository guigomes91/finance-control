import { Component, Input } from '@angular/core';
import { AccountStatus } from 'src/app/model/account/enum-account-status';

import { Account } from '../../../model/account/account';
import { AccountPlan } from '../../../model/account-plan/account-plan';
import { TypeAccountPlan } from '../../../model/account-plan/enum-type-account-plan';

const typePlan: AccountPlan = {
  id: '123',
  name: 'ESPORTE',
  type: TypeAccountPlan.RECEIVE
};

const ELEMENT_DATA: Account[] = [
  {
    description: 'Conta 1',
    amount: 22.22,
    due: new Date(),
    id: '1',
    payment: new Date(),
    portion: 1,
    status: AccountStatus.PAID_OUT,
    type: typePlan
  },
  { description: 'Conta 2',
    amount: 159,
    due: new Date(),
    id: '2',
    payment: new Date(),
    portion: 1,
    status: AccountStatus.OPEN,
    type: typePlan
  }
];

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {

  dataSource = ELEMENT_DATA;

  displayedColumns: string[] = [
    'description',
    'due',
    'payment',
    'portion',
    'amount',
    'type',
    'status'
  ];
}
