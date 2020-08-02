import { Component, Input } from '@angular/core';

@Component({
  selector: 'template-default',
  templateUrl: './template-default.component.html',
  styleUrls: ['./template-default.component.styl']
})
export class TemplateDefaultComponent {

  @Input() title: string;

  @Input() description: string;
}
