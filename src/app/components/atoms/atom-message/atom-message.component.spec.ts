import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomMessageComponent } from './atom-message.component';

describe('AtomMessageComponent', () => {
  let component: AtomMessageComponent;
  let fixture: ComponentFixture<AtomMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtomMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
