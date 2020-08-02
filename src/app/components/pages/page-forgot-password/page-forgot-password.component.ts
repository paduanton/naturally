import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication/authentication.service';

@Component({
  selector: 'page-forgot-password',
  templateUrl: './page-forgot-password.component.html',
  styleUrls: ['./page-forgot-password.component.styl']
})
export class PageForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  constructor(
    private titleService: Title,
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.titleService.setTitle('Esqueci a senha | Naturally');
    this.forgotPasswordForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]]
    });
  }

  forgotPassword() {
    const { username } = this.forgotPasswordForm.getRawValue();

    this.authenticationService
      .forgotPassword(username)
      .subscribe(() => {
        this.router.navigate(['/email-enviado'], { state: { email: username } });
      }, (err) =>  {
        this.forgotPasswordForm.get('username').setErrors({ usernameNotFound: true });
      });
  }

}
