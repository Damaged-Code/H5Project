import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoWrapComponent } from './logo-wrap.component';

describe('LogoWrapComponent', () => {
  let component: LogoWrapComponent;
  let fixture: ComponentFixture<LogoWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
