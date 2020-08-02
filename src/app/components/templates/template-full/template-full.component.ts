import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'template-full',
  templateUrl: './template-full.component.html',
  styleUrls: ['./template-full.component.styl']
})
export class TemplateFullComponent {

  @Input() title: string;

  @Input() description: string;

  @Input() icon: string;

  @Input() buttonText: string = 'Entrar no painel';

  @Output() action = new EventEmitter();

}
