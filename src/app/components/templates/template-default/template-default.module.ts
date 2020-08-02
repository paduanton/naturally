import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateDefaultComponent } from './template-default.component';
import { AtomsModule } from '../../atoms/atoms.module';
import { MoleculeCardModule } from '../../molecules/molecule-card/molecule-card.module';



@NgModule({
  declarations: [TemplateDefaultComponent],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculeCardModule
  ],
  exports: [
    TemplateDefaultComponent
  ]
})
export class TemplateDefaultModule { }
