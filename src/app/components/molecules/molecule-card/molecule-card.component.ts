import { Component, Input } from '@angular/core';

@Component({
  selector: 'molecule-card',
  templateUrl: './molecule-card.component.html',
  styleUrls: ['./molecule-card.component.styl']
})
export class MoleculeCardComponent {

  @Input() color: string;

  @Input() image: string;

}
