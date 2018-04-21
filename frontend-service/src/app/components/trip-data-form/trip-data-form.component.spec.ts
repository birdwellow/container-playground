import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripDataFormComponent } from './trip-data-form.component';

describe('TripDataFormComponent', () => {
  let component: TripDataFormComponent;
  let fixture: ComponentFixture<TripDataFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripDataFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripDataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
