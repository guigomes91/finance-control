import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { AccountComponent } from './container/account/account.component';
import { AccountRoutingModule } from './account-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AccountListComponent,
    AccountComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AccountRoutingModule,
    ReactiveFormsModule
  ]
})
export class AccountModule { }
