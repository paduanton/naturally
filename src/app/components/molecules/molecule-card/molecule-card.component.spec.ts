import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculeCardComponent } from './molecule-card.component';

describe('MoleculeCardComponent', () => {
  let component: MoleculeCardComponent;
  let fixture: ComponentFixture<MoleculeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoleculeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoleculeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
