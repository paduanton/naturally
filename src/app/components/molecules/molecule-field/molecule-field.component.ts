import { Component, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'molecule-field',
  templateUrl: './molecule-field.component.html',
  styleUrls: ['./molecule-field.component.styl']
})
export class MoleculeFieldComponent {

  @Input() parentFormGroup: FormGroup

  @Input() placeholder: string;

  @Input() text: string;

  @Input() type: string = 'text';

  @Input() id: string;

  @Input() cssClass: string;

  @Input() errors: any;

}
