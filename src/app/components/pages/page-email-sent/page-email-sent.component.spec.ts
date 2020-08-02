import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEmailSentComponent } from './page-email-sent.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TemplateFullModule } from '../../templates/template-full/template-full.module';

describe('PageEmailSentComponent', () => {
  let component: PageEmailSentComponent;
  let fixture: ComponentFixture<PageEmailSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageEmailSentComponent ],
      imports: [
        TemplateFullModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageEmailSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
