import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor() { }

  hasMinLength(control: AbstractControl, minLength = 6): ValidationErrors | null {
    return control.value.length >= minLength
            ? null
            : { minLength: true };
  }

  hasUpperCaseLetter(control: AbstractControl): ValidationErrors | null {
    return control.value.search(/[A-Z]/) !== -1
            ? null
            : { upperCaseLetter: true };
  }

  hasLowerCaseLetter(control: AbstractControl): ValidationErrors | null {
    return control.value.search(/[a-z]/) !== -1
            ? null
            : { lowerCaseLetter: true };
  }

  checkPasswords(passwordToMatch: string) {
    return (control: AbstractControl): ValidationErrors | null => {

      return !!control.parent && !!control.parent.value &&
        control.value === control.parent.controls[passwordToMatch].value
        ? null
        : { notMatch: true };
    };
  }
}
