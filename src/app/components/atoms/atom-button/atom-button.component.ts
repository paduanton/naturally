import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ButtonThemes, ButtonTypes } from './atom-button.types';

@Component({
  selector: 'atom-button',
  templateUrl: './atom-button.component.html',
  styleUrls: ['./atom-button.component.styl']
})
export class AtomButtonComponent {

  @Input() type: ButtonTypes = ButtonTypes.Button;

  @Input() theme: ButtonThemes = ButtonThemes.Primary;

  @Input() text: string;

  @Input() cssClass: string;

  @Input() disabled: boolean;

  @Output() action = new EventEmitter();

  public buttonThemes = ButtonThemes;
}
