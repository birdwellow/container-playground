import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripSearchResultsComponent } from './trip-search-results.component';

describe('TripSearchResultsComponent', () => {
  let component: TripSearchResultsComponent;
  let fixture: ComponentFixture<TripSearchResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripSearchResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
