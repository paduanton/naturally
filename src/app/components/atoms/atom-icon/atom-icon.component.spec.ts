import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomIconComponent } from './atom-icon.component';

describe('AtomIconComponent', () => {
  let component: AtomIconComponent;
  let fixture: ComponentFixture<AtomIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a arrow icon', () => {
    component.icon = 'arrow';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('img').getAttribute('src')).toContain('arrow.svg');
  });

  it('should not render a img when no "icon" its passed', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('img')).toBeNull();
  });
});
