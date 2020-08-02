import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDefaultComponent } from './template-default.component';
import { AtomsModule } from '../../atoms/atoms.module';
import { MoleculeCardModule } from '../../molecules/molecule-card/molecule-card.module';

describe('TemplateDefaultComponent', () => {
  let component: TemplateDefaultComponent;
  let fixture: ComponentFixture<TemplateDefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDefaultComponent ],
      imports: [
        AtomsModule,
        MoleculeCardModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
