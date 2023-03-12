import { Component } from '@angular/core';
import { Account } from '../../../model/account/account';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  accounts$: Observable<Account[]> | null = null;

  constructor() {}
}
