import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayEpisodeComponent } from './display-episode.component';

describe('BlocEpisodeComponent', () => {
  let component: DisplayEpisodeComponent;
  let fixture: ComponentFixture<DisplayEpisodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayEpisodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
