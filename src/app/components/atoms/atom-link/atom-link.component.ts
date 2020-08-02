import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'atom-link',
  templateUrl: './atom-link.component.html',
  styleUrls: ['./atom-link.component.styl']
})
export class AtomLinkComponent {

  @Input() url: string;

  @Input() text: string;

  constructor(private router: Router) { }

  goTo() {
    if( this.url ) {
      this.router.navigate([this.url]);
    }
  }

}
