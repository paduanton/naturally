import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoleculeCardComponent } from './molecule-card.component';



@NgModule({
  declarations: [MoleculeCardComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MoleculeCardComponent
  ]
})
export class MoleculeCardModule { }
