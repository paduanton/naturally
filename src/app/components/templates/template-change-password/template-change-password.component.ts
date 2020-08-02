import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'template-change-password',
  templateUrl: './template-change-password.component.html',
  styleUrls: ['./template-change-password.component.styl']
})
export class TemplateChangePasswordComponent {

  @Input() parentFormGroup: FormGroup;

  @Output() onSubmit = new EventEmitter();

  hasErrors() {

    return this.parentFormGroup.get('newPassword').errors ||
            this.parentFormGroup.get('newPasswordConfirm').errors;
  }

}
