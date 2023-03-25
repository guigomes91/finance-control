import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { AccountRoutingModule } from './account-routing.module';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountComponent } from './container/account/account.component';
import { AccountFormComponent } from './components/account-form/account-form.component';
import { AccountResolverComponent } from './guards/account-resolver/account-resolver.component';

@NgModule({
  declarations: [
    AccountListComponent,
    AccountComponent,
    AccountFormComponent,
    AccountResolverComponent
  ],
  imports: [
    CommonModule,
    AppMaterialModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AccountModule { }
