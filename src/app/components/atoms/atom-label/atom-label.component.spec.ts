import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomLabelComponent } from './atom-label.component';

describe('AtomLabelComponent', () => {
  let component: AtomLabelComponent;
  let fixture: ComponentFixture<AtomLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a label with text "Nome"', () => {
    component.text = 'Nome';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('label').textContent).toContain('Nome');
  });

  it('should not render a label tag', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('label')).toBeNull();
  });
});
