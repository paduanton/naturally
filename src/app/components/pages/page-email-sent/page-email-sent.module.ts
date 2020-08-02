import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageEmailSentRoutingModule } from './page-email-sent-routing.module';
import { PageEmailSentComponent } from './page-email-sent.component';
import { TemplateFullModule } from '../../templates/template-full/template-full.module';


@NgModule({
  declarations: [PageEmailSentComponent],
  imports: [
    CommonModule,
    PageEmailSentRoutingModule,
    TemplateFullModule
  ]
})
export class PageEmailSentModule { }
