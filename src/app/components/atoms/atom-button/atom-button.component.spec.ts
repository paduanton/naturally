import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomButtonComponent } from './atom-button.component';
import { ButtonThemes, ButtonTypes } from './atom-button.types';

describe('AtomButtonComponent', () => {
  let component: AtomButtonComponent;
  let fixture: ComponentFixture<AtomButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a secondary button', () => {
    component.theme = ButtonThemes.Secondary;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('button')).toHaveClass('button--secondary');
  });

  it('should render a primary button by default', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('button')).toHaveClass('button--primary');
  });

  it('should render a button type "submit"', () => {
    component.type = ButtonTypes.Submit;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('button')).toHaveClass('button--primary');
  });

  it('should render a button type "button" by default', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('button').getAttribute('type')).toEqual('button');
  });
});
