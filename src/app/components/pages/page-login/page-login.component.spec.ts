import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLoginComponent } from './page-login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageLoginRoutingModule } from './page-login-routing.module';
import { TemplateLoginModule } from '../../templates/template-login/template-login.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PageLoginComponent', () => {
  let component: PageLoginComponent;
  let fixture: ComponentFixture<PageLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageLoginComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        PageLoginRoutingModule,
        TemplateLoginModule,
        RouterTestingModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
