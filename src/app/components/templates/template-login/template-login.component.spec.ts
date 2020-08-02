import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateLoginComponent } from './template-login.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AtomsModule } from '../../atoms/atoms.module';
import { MoleculeFieldModule } from '../../molecules/molecule-field/molecule-field.module';
import { TemplateDefaultModule } from '../template-default/template-default.module';
import { MoleculeCardModule } from '../../molecules/molecule-card/molecule-card.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('TemplateLoginComponent', () => {
  let component: TemplateLoginComponent;
  let fixture: ComponentFixture<TemplateLoginComponent>;
  let formBuilder: FormBuilder =  new FormBuilder();
  let formGroup: FormGroup = formBuilder.group({
    username: ['', Validators.required, Validators.email],
    password: ['', Validators.required]
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateLoginComponent ],
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
    fixture = TestBed.createComponent(TemplateLoginComponent);
    component = fixture.componentInstance;
    component.parentFormGroup = formGroup;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
