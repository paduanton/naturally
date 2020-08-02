import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculeFieldComponent } from './molecule-field.component';
import { AtomsModule } from '../../atoms/atoms.module';

@NgModule({
  declarations: [MoleculeFieldComponent],
  imports: [
    CommonModule,
    AtomsModule
  ],
  exports: [
    MoleculeFieldComponent
  ]
})
export class MoleculeFieldModule { }
