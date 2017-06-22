import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocEpisodeComponent } from './display-episode.component';

describe('BlocEpisodeComponent', () => {
  let component: BlocEpisodeComponent;
  let fixture: ComponentFixture<BlocEpisodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocEpisodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
