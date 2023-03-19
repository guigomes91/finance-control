import { Component, Input } from '@angular/core';
import { Account } from '../../../model/account/account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {

  @Input() accounts: Account[] = [];

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
