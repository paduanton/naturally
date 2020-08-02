import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomTitleComponent } from './atom-title.component';

describe('AtomTitleComponent', () => {
  let component: AtomTitleComponent;
  let fixture: ComponentFixture<AtomTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a h1 tag', () => {
    component.type = 'h1';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('h1')).toBeTruthy()
  });

  it('should render a h2 tag with text', () => {
    component.type = 'h2';
    component.text = 'Teste';
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('h2')).toBeTruthy();
    expect(compiled.querySelector('h2').textContent).toContain('Teste');
  });

  it('should render a h3 as defualt tag', () => {
    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('h3')).toBeTruthy();
  });
});
