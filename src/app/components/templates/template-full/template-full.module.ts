import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFullComponent } from './template-full.component';
import { AtomsModule } from '../../atoms/atoms.module';
import { MoleculeCardModule } from '../../molecules/molecule-card/molecule-card.module';



@NgModule({
  declarations: [TemplateFullComponent],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculeCardModule
  ],
  exports: [TemplateFullComponent]
})
export class TemplateFullModule { }
