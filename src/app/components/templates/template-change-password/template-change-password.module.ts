import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateChangePasswordComponent } from './template-change-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TemplateDefaultModule } from '../template-default/template-default.module';
import { AtomsModule } from '../../atoms/atoms.module';
import { MoleculeFieldModule } from '../../molecules/molecule-field/molecule-field.module';
import { MoleculeCardModule } from '../../molecules/molecule-card/molecule-card.module';
import { RouterModule } from '@angular/router';
import { MoleculePasswordRulesModule } from '../../molecules/molecule-password-rules/molecule-password-rules.module';



@NgModule({
  declarations: [TemplateChangePasswordComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TemplateDefaultModule,
    AtomsModule,
    MoleculeFieldModule,
    MoleculeCardModule,
    MoleculePasswordRulesModule
  ],
  exports: [
    TemplateChangePasswordComponent
  ]
})
export class TemplateChangePasswordModule { }
