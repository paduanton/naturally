import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomInputComponent } from './atom-input.component';
import { ControlContainer, FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl, FormGroupDirective } from '@angular/forms';

describe('AtomInputComponent', () => {
  let component: AtomInputComponent;
  let fixture: ComponentFixture<AtomInputComponent>;
  let formGroup: FormGroup = new FormGroup({
    'username': new FormControl('')
  });
  let formGroupDirective: FormGroupDirective = new FormGroupDirective([], []);
  formGroupDirective.form = formGroup;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomInputComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
      ],
      providers: [ { provide: ControlContainer, useValue: formGroupDirective } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomInputComponent);
    component = fixture.componentInstance;
    component.id = 'username';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
