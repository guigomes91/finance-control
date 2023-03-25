import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Account } from '../../../model/account/account';
import { AccountService } from '../../../service/account.service';

@Injectable({
  providedIn: 'root'
})
export class AccountResolver implements Resolve<Account> {

  constructor(private service: AccountService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Account> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({
        id: '',
        due: new Date(),
        payment: new Date(),
        portion: 0,
        amount: 0,
        type: null,
        description: '',
        status: null});
  }
}
