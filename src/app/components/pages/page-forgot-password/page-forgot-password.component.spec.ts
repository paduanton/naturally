import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageForgotPasswordComponent } from './page-forgot-password.component';
import { TemplateForgotPasswordModule } from '../../templates/template-forgot-password/template-forgot-password.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PageForgotPasswordComponent', () => {
  let component: PageForgotPasswordComponent;
  let fixture: ComponentFixture<PageForgotPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageForgotPasswordComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        TemplateForgotPasswordModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageForgotPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
