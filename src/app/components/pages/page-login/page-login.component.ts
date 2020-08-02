import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { IUserLogin, IUser } from 'src/app/core/types/user.types';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/core/services/user/user.service';

const ERRORS = {
  usernameNotFound: 'user not found',
  wrongPassword: 'Missing password',
};


@Component({
  selector: 'page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.styl']
})
export class PageLoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private titleService: Title,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Login Naturally');
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    const user = this.loginForm.getRawValue() as IUserLogin;

    this.authenticationService
      .authenticate(user)
      .subscribe(() => {
        console.log('logged! redirecting for application..');
      },
      (err) => {
        const { error } = err.error;

        if( error === ERRORS.usernameNotFound ) {
          this.loginForm.get('username').setErrors({ usernameNotFound: true });
        }

        if( error === ERRORS.wrongPassword ) {
          this.loginForm.get('password').setErrors({ wrongPassword: true });
        }
      });
  }
}
