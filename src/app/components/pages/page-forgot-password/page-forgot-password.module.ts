import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageForgotPasswordRoutingModule } from './page-forgot-password-routing.module';
import { PageForgotPasswordComponent } from './page-forgot-password.component';
import { TemplateForgotPasswordModule } from '../../templates/template-forgot-password/template-forgot-password.module';


@NgModule({
  declarations: [PageForgotPasswordComponent],
  imports: [
    CommonModule,
    PageForgotPasswordRoutingModule,
    TemplateForgotPasswordModule
  ]
})
export class PageForgotPasswordModule { }
