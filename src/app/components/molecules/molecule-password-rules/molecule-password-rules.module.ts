import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculePasswordRulesComponent } from './molecule-password-rules.component';
import { AtomsModule } from '../../atoms/atoms.module';



@NgModule({
  declarations: [MoleculePasswordRulesComponent],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports: [
    MoleculePasswordRulesComponent
  ]
})
export class MoleculePasswordRulesModule { }
