import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySeasonComponent } from './display-season.component';

describe('BlocSeasonsComponent', () => {
  let component: DisplaySeasonComponent;
  let fixture: ComponentFixture<DisplaySeasonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySeasonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
