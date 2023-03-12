import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { AccountRoutingModule } from './account-routing.module';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountComponent } from './container/account/account.component';

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
