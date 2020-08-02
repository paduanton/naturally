import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { PageChangePasswordRoutingModule } from './page-change-password-routing.module';
import { PageChangePasswordComponent } from './page-change-password.component';
import { TemplateChangePasswordModule } from '../../templates/template-change-password/template-change-password.module';


@NgModule({
  declarations: [PageChangePasswordComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PageChangePasswordRoutingModule,
    TemplateChangePasswordModule
  ]
})
export class PageChangePasswordModule { }
