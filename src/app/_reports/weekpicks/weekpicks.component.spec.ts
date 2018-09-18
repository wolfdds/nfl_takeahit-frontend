import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekpicksComponent } from './weekpicks.component';

describe('WeekpicksComponent', () => {
  let component: WeekpicksComponent;
  let fixture: ComponentFixture<WeekpicksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeekpicksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekpicksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
