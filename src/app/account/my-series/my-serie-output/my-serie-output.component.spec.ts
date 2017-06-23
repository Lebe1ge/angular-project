import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MySerieOutputComponent } from './my-serie-output.component';

describe('MySerieOutputComponent', () => {
  let component: MySerieOutputComponent;
  let fixture: ComponentFixture<MySerieOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MySerieOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MySerieOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
