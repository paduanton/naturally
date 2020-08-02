import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-icon',
  templateUrl: './atom-icon.component.html',
  styleUrls: ['./atom-icon.component.styl']
})
export class AtomIconComponent {

  @Input() icon: string;

  get iconPath() {

    return `./assets/images/icons/${this.icon}.svg`;
  }

}
