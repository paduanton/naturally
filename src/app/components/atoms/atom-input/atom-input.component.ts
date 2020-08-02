import { Component, Input } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: 'atom-input',
  templateUrl: './atom-input.component.html',
  styleUrls: ['./atom-input.component.styl']
})
export class AtomInputComponent {

  @Input() placeholder: string;

  @Input() type: string;

  @Input() id: string;

  @Input() cssClass: string;

  constructor(public controlContainer: ControlContainer) { }
}
