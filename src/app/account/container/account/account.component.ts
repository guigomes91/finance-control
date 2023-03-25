import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';

import { Account } from '../../../model/account/account';
import { AccountService } from '../../../service/account.service';
import { ErrorDialogComponent } from '../../../shared/components/error-dialog/error-dialog.component';
import { ConfirmationDialogComponent } from '../../../shared/components/confirmation-dialog/confirmation-dialog.component';

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
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar
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
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  onEdit(account: Account) {
    this.router.navigate(['edit', account.id], {relativeTo: this.route});
  }

  onDelete(account: Account) {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      data: 'Tem certeza que deseja remover essa conta?',
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.accountService.remove(account.id).subscribe(
          () => {
            this.refresh();
            this._snackBar.open('Conta removida com sucesso!', 'X', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'center'
            });
          },
          () => this.onError('Erro ao tentar remover conta.')
        );
      }
    });
  }
}
