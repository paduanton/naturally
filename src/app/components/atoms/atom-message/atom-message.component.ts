import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-message',
  templateUrl: './atom-message.component.html',
  styleUrls: ['./atom-message.component.styl']
})
export class AtomMessageComponent {

  @Input() type = 'error';

  @Input() text: string;
}
