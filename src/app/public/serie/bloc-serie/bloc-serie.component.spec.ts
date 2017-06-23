import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocSerieComponent } from './bloc-serie.component';

describe('BlocSerieComponent', () => {
  let component: BlocSerieComponent;
  let fixture: ComponentFixture<BlocSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
