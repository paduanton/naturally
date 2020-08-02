import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TemplateLoginComponent } from './template-login.component';
import { AtomsModule } from '../../atoms/atoms.module';
import { MoleculeFieldModule } from '../../molecules/molecule-field/molecule-field.module';
import { MoleculeCardModule } from '../../molecules/molecule-card/molecule-card.module';
import { TemplateDefaultModule } from '../template-default/template-default.module';


@NgModule({
  declarations: [TemplateLoginComponent],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TemplateDefaultModule,
    AtomsModule,
    MoleculeFieldModule,
    MoleculeCardModule
  ],
  exports: [
    TemplateLoginComponent
  ]
})
export class TemplateLoginModule { }
