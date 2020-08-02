import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculeFieldComponent } from './molecule-field.component';
import { AtomsModule } from '../../atoms/atoms.module';
import { FormGroup, ControlContainer, FormGroupDirective, FormControl } from '@angular/forms';

describe('MoleculeFieldComponent', () => {
  let component: MoleculeFieldComponent;
  let fixture: ComponentFixture<MoleculeFieldComponent>;
  let formGroup: FormGroup = new FormGroup({
    'username': new FormControl('')
  });
  let formGroupDirective: FormGroupDirective = new FormGroupDirective([], []);
  formGroupDirective.form = formGroup;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoleculeFieldComponent ],
      imports: [
        AtomsModule
      ],
      providers: [ { provide: ControlContainer, useValue: formGroupDirective } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoleculeFieldComponent);
    component = fixture.componentInstance;
    component.parentFormGroup = formGroup;
    component.id = 'username';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
