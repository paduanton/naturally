import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateFullComponent } from './template-full.component';
import { RouterTestingModule } from '@angular/router/testing';
import { AtomsModule } from '../../atoms/atoms.module';
import { MoleculeCardModule } from '../../molecules/molecule-card/molecule-card.module';

describe('TemplateFullComponent', () => {
  let component: TemplateFullComponent;
  let fixture: ComponentFixture<TemplateFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateFullComponent ],
      imports: [
        AtomsModule,
        MoleculeCardModule,
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
