import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { Account } from '../../../model/account/account';
import { AccountService } from '../../../service/account.service';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {

  accounts$: Observable<Account[]> | null = null;

  constructor(
    private accountService: AccountService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.refresh();
  }

  refresh() {
    this.accounts$ = this.accountService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar contas.');
        return of([])
      })
    );
  }

  onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.router});
  }

  onEdit(account: Account) {}

  onDelete(account: Account) {}
}
