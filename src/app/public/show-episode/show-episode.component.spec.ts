import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEpisodeComponent } from './show-episode.component';

describe('ShowEpisodeComponent', () => {
  let component: ShowEpisodeComponent;
  let fixture: ComponentFixture<ShowEpisodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEpisodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
