import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateForgotPasswordComponent } from './template-forgot-password.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { TemplateDefaultModule } from '../template-default/template-default.module';
import { AtomsModule } from '../../atoms/atoms.module';
import { MoleculeFieldModule } from '../../molecules/molecule-field/molecule-field.module';
import { MoleculeCardModule } from '../../molecules/molecule-card/molecule-card.module';

describe('TemplateForgotPasswordComponent', () => {
  let component: TemplateForgotPasswordComponent;
  let fixture: ComponentFixture<TemplateForgotPasswordComponent>;
  let formBuilder: FormBuilder =  new FormBuilder();
  let formGroup: FormGroup = formBuilder.group({
    username: ['']
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateForgotPasswordComponent ],
      imports: [
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        TemplateDefaultModule,
        AtomsModule,
        MoleculeFieldModule,
        MoleculeCardModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateForgotPasswordComponent);
    component = fixture.componentInstance;
    component.parentFormGroup = formGroup;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
