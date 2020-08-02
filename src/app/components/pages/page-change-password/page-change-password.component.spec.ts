import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChangePasswordComponent } from './page-change-password.component';
import { TemplateChangePasswordModule } from '../../templates/template-change-password/template-change-password.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PageChangePasswordComponent', () => {
  let component: PageChangePasswordComponent;
  let fixture: ComponentFixture<PageChangePasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageChangePasswordComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        TemplateChangePasswordModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
