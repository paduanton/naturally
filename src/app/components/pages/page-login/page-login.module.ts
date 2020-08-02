import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { PageLoginRoutingModule } from './page-login-routing.module';
import { PageLoginComponent } from './page-login.component';
import { TemplateLoginModule } from '../../templates/template-login/template-login.module';


@NgModule({
  declarations: [PageLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PageLoginRoutingModule,
    TemplateLoginModule
  ]
})
export class PageLoginModule { }
