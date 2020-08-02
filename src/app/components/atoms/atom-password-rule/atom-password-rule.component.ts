import { Component, Input } from '@angular/core';

@Component({
  selector: 'atom-password-rule',
  templateUrl: './atom-password-rule.component.html',
  styleUrls: ['./atom-password-rule.component.styl']
})
export class AtomPasswordRuleComponent {

  @Input() text: string;

}
