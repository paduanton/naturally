import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageForgotPasswordComponent } from './page-forgot-password.component';

const routes: Routes = [
  { path: 'recuperar-senha', component: PageForgotPasswordComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageForgotPasswordRoutingModule { }
