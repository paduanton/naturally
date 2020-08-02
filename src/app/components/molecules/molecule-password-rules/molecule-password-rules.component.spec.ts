import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculePasswordRulesComponent } from './molecule-password-rules.component';
import { AtomsModule } from '../../atoms/atoms.module';

describe('MoleculePasswordRulesComponent', () => {
  let component: MoleculePasswordRulesComponent;
  let fixture: ComponentFixture<MoleculePasswordRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoleculePasswordRulesComponent ],
      imports: [
        AtomsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoleculePasswordRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
