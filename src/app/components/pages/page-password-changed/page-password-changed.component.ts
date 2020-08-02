import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'page-password-changed',
  templateUrl: './page-password-changed.component.html',
  styleUrls: ['./page-password-changed.component.styl']
})
export class PagePasswordChangedComponent {

  constructor(
    private router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle('Senha alterada! | Naturally');
  }

  goToLogin() {

    this.router.navigate(['/login']);
  }

}
