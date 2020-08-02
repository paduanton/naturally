import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomLinkComponent } from './atom-link.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AtomLinkComponent', () => {
  let component: AtomLinkComponent;
  let fixture: ComponentFixture<AtomLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomLinkComponent ],
      imports: [
        RouterTestingModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not render a "a" tag', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('a')).toBeNull();
  });

  it('should not render a link with "Home" text', () => {
    component.url = '/home';
    component.text = 'Home';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('a').textContent).toContain('Home');
  });
});
