import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'page-email-sent',
  templateUrl: './page-email-sent.component.html',
  styleUrls: ['./page-email-sent.component.styl']
})
export class PageEmailSentComponent {

  email: string = '';

  constructor(
    private router: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle('Email enviado | Naturally');
    const navigation = this.router.getCurrentNavigation();
    if( navigation && navigation.extras.state ) {
      const state = navigation.extras.state as {email: string};
      this.email = state.email;
    }
  }

  goToLogin() {

    this.router.navigate(['/login']);
  }

}
