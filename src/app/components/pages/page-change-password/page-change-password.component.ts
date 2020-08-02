import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { PasswordService } from '../../../core/services/password/password.service';
import { AuthenticationService } from '../../../core/services/authentication/authentication.service';


@Component({
  selector: 'page-change-password',
  templateUrl: './page-change-password.component.html',
  styleUrls: ['./page-change-password.component.styl']
})
export class PageChangePasswordComponent implements OnInit {

  changePasswordForm: FormGroup;

  constructor(
    private titleService: Title,
    private formBuilder: FormBuilder,
    private router: Router,
    private passwordService: PasswordService,
    private authenticationService: AuthenticationService
  ) { }


  ngOnInit() {
    this.titleService.setTitle('Altere a senha! | Naturally');
    this.changePasswordForm = this.formBuilder.group({
      newPassword: ['', [
        Validators.required,
        this.passwordService.hasMinLength,
        this.passwordService.hasLowerCaseLetter,
        this.passwordService.hasUpperCaseLetter
      ]],
      newPasswordConfirm: ['', [
        Validators.required,
        this.passwordService.checkPasswords('newPassword')
      ]]
    });

    this.checkPasswords();
  }

  changePassword() {
    const passwords = this.changePasswordForm.getRawValue();

    this.authenticationService
      .changePassword(passwords.newPassword)
      .subscribe(() => {
        this.router.navigate(['/senha-alterada']);
      },
      (err) => console.log(err));
  }

  checkPasswords() {
    this.changePasswordForm.valueChanges.subscribe(controls => {
      if( controls.newPassword !== controls.newPasswordConfirm ) {
        this.changePasswordForm.get('newPasswordConfirm').setErrors({ notMatch: true })
      }
    });
  }
}
