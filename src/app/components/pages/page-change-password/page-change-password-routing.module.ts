import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageChangePasswordComponent } from './page-change-password.component';

const routes: Routes = [
  { path: 'alterar-senha', component: PageChangePasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageChangePasswordRoutingModule { }
