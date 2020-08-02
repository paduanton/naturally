import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginModule } from './components/pages/page-login/page-login.module';
import { PageForgotPasswordModule } from './components/pages/page-forgot-password/page-forgot-password.module';
import { PageEmailSentModule } from './components/pages/page-email-sent/page-email-sent.module';
import { PagePasswordChangedModule } from './components/pages/page-password-changed/page-password-changed.module';
import { PageChangePasswordModule } from './components/pages/page-change-password/page-change-password.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    PageLoginModule,
    PageForgotPasswordModule,
    PageEmailSentModule,
    PagePasswordChangedModule,
    PageChangePasswordModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
