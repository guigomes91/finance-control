import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccountComponent } from './container/account/account.component';
import { AccountFormComponent } from './components/account-form/account-form.component';
import { AccountResolver } from './guards/account-resolver';

const routes: Routes = [
  { path: '', component: AccountComponent },
  { path: 'new', component: AccountFormComponent, resolve: { account: AccountResolver }}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
