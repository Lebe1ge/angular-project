import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieBannerComponent } from './serie-banner.component';

describe('SerieBannerComponent', () => {
  let component: SerieBannerComponent;
  let fixture: ComponentFixture<SerieBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
