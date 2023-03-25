import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Account } from '../model/account/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private readonly API = 'api/account';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient
      .get<Account[]>(this.API)
      .pipe(
        first(),
        tap(accounts => console.log(accounts))
      );
  }

  loadById(id: string) {
    return this.httpClient.get<Account>(`${this.API}/${id}`);
  }
}
