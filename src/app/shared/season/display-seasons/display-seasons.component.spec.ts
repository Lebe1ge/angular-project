import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocSeasonsComponent } from './display-season.component';

describe('BlocSeasonsComponent', () => {
  let component: BlocSeasonsComponent;
  let fixture: ComponentFixture<BlocSeasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocSeasonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
