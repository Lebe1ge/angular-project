import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeSerieComponent } from './liste-serie.component';

describe('ListeSerieComponent', () => {
  let component: ListeSerieComponent;
  let fixture: ComponentFixture<ListeSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
