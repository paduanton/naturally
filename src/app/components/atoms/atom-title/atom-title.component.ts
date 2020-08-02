import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-title',
  templateUrl: './atom-title.component.html',
  styleUrls: ['./atom-title.component.styl']
})
export class AtomTitleComponent {

  @Input() type = 'h3';

  @Input() text: string;

  @Input() image: string;


  get title() {

    if( this.image ) {
      return `<img src="${this.image}" alt="${this.text}" />`;
    }

    return this.text;
  }

}
