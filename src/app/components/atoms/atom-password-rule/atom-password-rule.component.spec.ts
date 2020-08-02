import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomPasswordRuleComponent } from './atom-password-rule.component';

describe('AtomPasswordRuleComponent', () => {
  let component: AtomPasswordRuleComponent;
  let fixture: ComponentFixture<AtomPasswordRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomPasswordRuleComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomPasswordRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render a paragraph', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('p')).toBe(null);
  });

  it('should render a paragraph with "Senha" text', () => {
    component.text = 'Senha';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('p').textContent).toContain('Senha');
  });
});
