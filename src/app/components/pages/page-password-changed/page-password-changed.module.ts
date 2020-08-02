import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagePasswordChangedRoutingModule } from './page-password-changed-routing.module';
import { PagePasswordChangedComponent } from './page-password-changed.component';
import { TemplateFullModule } from '../../templates/template-full/template-full.module';


@NgModule({
  declarations: [PagePasswordChangedComponent],
  imports: [
    CommonModule,
    PagePasswordChangedRoutingModule,
    TemplateFullModule
  ]
})
export class PagePasswordChangedModule { }
