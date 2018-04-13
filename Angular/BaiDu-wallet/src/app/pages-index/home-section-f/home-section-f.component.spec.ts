import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSectionFComponent } from './home-section-f.component';

describe('HomeSectionFComponent', () => {
  let component: HomeSectionFComponent;
  let fixture: ComponentFixture<HomeSectionFComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSectionFComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSectionFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
