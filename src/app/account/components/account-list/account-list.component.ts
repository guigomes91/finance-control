import { Component, Input } from '@angular/core';
import { AccountStatus } from 'src/app/model/account/enum-account-status';

import { Account } from '../../../model/account/account';
import { AccountPlan } from '../../../model/account-plan/account-plan';
import { TypeAccountPlan } from '../../../model/account-plan/enum-type-account-plan';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {

  typePlan: AccountPlan = {
    id: '123',
    name: 'ESPORTE',
    type: TypeAccountPlan.RECEIVE
  };

  accounts: Account[] = [
    { description: 'Conta1',
      amount: 22.22,
      due: new Date(),
      id: '1',
      payment: new Date(),
      portion: 1,
      status: AccountStatus.OPEN,
      type: this.typePlan}
  ];

  readonly displayedColumns: string[] = [
    'Descrição',
    'Vencimento',
    'Pagamento',
    'Parcela',
    'Valor',
    'Tipo',
    'Situação'
  ];
}
