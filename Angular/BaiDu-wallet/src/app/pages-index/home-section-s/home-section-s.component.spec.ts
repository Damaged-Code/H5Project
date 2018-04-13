import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionSComponent } from './home-section-s.component';

describe('HomeSectionSComponent', () => {
  let component: HomeSectionSComponent;
  let fixture: ComponentFixture<HomeSectionSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSectionSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSectionSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
