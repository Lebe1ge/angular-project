import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaySerieComponent } from './display-serie.component';

describe('DisplaySerieComponent', () => {
  let component: DisplaySerieComponent;
  let fixture: ComponentFixture<DisplaySerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaySerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaySerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
