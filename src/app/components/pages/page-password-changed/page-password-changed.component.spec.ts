import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePasswordChangedComponent } from './page-password-changed.component';
import { TemplateFullModule } from '../../templates/template-full/template-full.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('PagePasswordChangedComponent', () => {
  let component: PagePasswordChangedComponent;
  let fixture: ComponentFixture<PagePasswordChangedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagePasswordChangedComponent ],
      imports: [
        RouterTestingModule,
        TemplateFullModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePasswordChangedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
