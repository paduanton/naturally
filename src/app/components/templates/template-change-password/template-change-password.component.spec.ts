import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateChangePasswordComponent } from './template-change-password.component';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup } from '@angular/forms';
import { AtomsModule } from '../../atoms/atoms.module';
import { MoleculeFieldModule } from '../../molecules/molecule-field/molecule-field.module';
import { MoleculePasswordRulesModule } from '../../molecules/molecule-password-rules/molecule-password-rules.module';
import { RouterModule } from '@angular/router';
import { TemplateDefaultModule } from '../template-default/template-default.module';
import { MoleculeCardModule } from '../../molecules/molecule-card/molecule-card.module';

describe('TemplateChangePasswordComponent', () => {
  let component: TemplateChangePasswordComponent;
  let fixture: ComponentFixture<TemplateChangePasswordComponent>;
  let formBuilder: FormBuilder =  new FormBuilder()
  let formGroup: FormGroup = formBuilder.group({
    newPassword: [''],
    newPasswordConfirm: ['']
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateChangePasswordComponent ],
      imports: [
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        TemplateDefaultModule,
        AtomsModule,
        MoleculeFieldModule,
        MoleculeCardModule,
        MoleculePasswordRulesModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateChangePasswordComponent);
    component = fixture.componentInstance;
    component.parentFormGroup = formGroup;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
