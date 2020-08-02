import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AtomInputComponent } from './atom-input/atom-input.component';
import { AtomLabelComponent } from './atom-label/atom-label.component';
import { AtomLinkComponent } from './atom-link/atom-link.component';
import { AtomButtonComponent } from './atom-button/atom-button.component';
import { AtomMessageComponent } from './atom-message/atom-message.component';
import { AtomTitleComponent } from './atom-title/atom-title.component';
import { AtomIconComponent } from './atom-icon/atom-icon.component';
import { AtomPasswordRuleComponent } from './atom-password-rule/atom-password-rule.component';


@NgModule({
  declarations: [
    AtomInputComponent,
    AtomLabelComponent,
    AtomLinkComponent,
    AtomButtonComponent,
    AtomMessageComponent,
    AtomTitleComponent,
    AtomIconComponent,
    AtomPasswordRuleComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    AtomInputComponent,
    AtomLabelComponent,
    AtomLinkComponent,
    AtomButtonComponent,
    AtomMessageComponent,
    AtomTitleComponent,
    AtomIconComponent,
    AtomPasswordRuleComponent
  ]
})
export class AtomsModule { }
