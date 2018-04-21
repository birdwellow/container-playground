import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripSearchFormComponent } from './trip-search-form.component';

describe('TripSearchFormComponent', () => {
  let component: TripSearchFormComponent;
  let fixture: ComponentFixture<TripSearchFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripSearchFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
