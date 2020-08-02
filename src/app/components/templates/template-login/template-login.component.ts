import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'template-login',
  templateUrl: './template-login.component.html',
  styleUrls: ['./template-login.component.styl']
})
export class TemplateLoginComponent {

  @Input() parentFormGroup: FormGroup;

  @Output() onSubmit = new EventEmitter();

}
