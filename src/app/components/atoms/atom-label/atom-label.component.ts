import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-label',
  templateUrl: './atom-label.component.html',
  styleUrls: ['./atom-label.component.styl']
})
export class AtomLabelComponent {

  @Input()
  text: string;

  @Input()
  for: string;

}
