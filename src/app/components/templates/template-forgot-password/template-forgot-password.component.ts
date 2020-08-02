import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'template-forgot-password',
  templateUrl: './template-forgot-password.component.html',
  styleUrls: ['./template-forgot-password.component.styl']
})
export class TemplateForgotPasswordComponent {

  @Input() parentFormGroup: FormGroup;

  @Output() onSubmit = new EventEmitter();

}
