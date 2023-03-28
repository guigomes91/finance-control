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

  remove(id: string) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

  save(record: Partial<Account>) {
    if (record.id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Account>) {
    return this.httpClient.post<Account>(this.API, record).pipe(first());
  }

  private update(record: Partial<Account>) {
    return this.httpClient.put<Account>(`${this.API}/${record.id}`, record).pipe(first());
  }
}
