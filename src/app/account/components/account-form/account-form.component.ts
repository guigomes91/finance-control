import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

import { Account } from '../../../model/account/account';
import { AccountService } from '../../../service/account.service';

@Component({
  selector: 'app-account-form',
  templateUrl: './account-form.component.html',
  styleUrls: ['./account-form.component.css']
})
export class AccountFormComponent implements OnInit {

  form = this.formBuilder.group({
    id: [''],
    description: ['', [Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100)]],
    due: [new Date()],
    payment: [new Date()],
    portion: [0],
    amount: [0]
  });

  constructor(private formBuilder: NonNullableFormBuilder,
    private service: AccountService,
    private _snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute) {}

    ngOnInit(): void {
      const account: Account = this.route.snapshot.data['account'];
      this.form.setValue({
        id: account.id,
        description: account.description,
        due: account.due,
        payment: account.payment,
        portion: account.portion,
        amount: account.amount
      });
  }

  onSubmit() {
    this.service.save(this.form.value)
      .subscribe(result => this.onSucess(), error => {
      this.onError();
    });
  }

  onCancel() {
    this.location.back();
  }

  private onSucess() {
    this._snackBar.open('Conta salva com sucesso!', '', {duration: 3000});
    this.onCancel();
  }

  private onError() {
    this._snackBar.open('Erro ao salvar conta', '', {duration: 3000});
  }

  getErrorMessage(fieldName: string) {
    const field = this.form.get(fieldName);

    if (field?.hasError('required')) {
      return 'Campo obrigatório';
    }

    if (field?.hasError('minlength')) {
      const requiredLength = field.errors ? field.errors['minlength']['requiredLength'] : 5;
      return `Tamanho minimo precisa ser de ${requiredLength} caracteres.`;
    }

    if (field?.hasError('maxlength')) {
      const requiredLength = field.errors ? field.errors['maxlength']['requiredLength'] : 100;
      return `Tamanho máximo excedido de ${requiredLength} caracteres.`;
    }

    return 'Campo Inválido';
  }
}
