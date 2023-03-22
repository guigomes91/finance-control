import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Account } from '../../../model/account/account';

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css']
})
export class AccountListComponent {

  @Input() accounts: Account[] = [];
  @Output() add = new EventEmitter(false);
  @Output() edit = new EventEmitter(false);
  @Output() remove = new EventEmitter(false);

  displayedColumns: string[] = [
    'description',
    'due',
    'payment',
    'portion',
    'amount',
    'type',
    'status',
    'actions'
  ];

  onAdd() {
    this.add.emit(true);
  }

  onEdit(account: Account) {
    this.edit.emit(account);
  }

  onDelete(account: Account) {
    this.remove.emit(account);
  }
}
