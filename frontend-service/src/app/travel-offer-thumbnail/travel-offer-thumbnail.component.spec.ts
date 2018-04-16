import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelOfferThumbnailComponent } from './travel-offer-thumbnail.component';

describe('TravelOfferThumbnailComponent', () => {
  let component: TravelOfferThumbnailComponent;
  let fixture: ComponentFixture<TravelOfferThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelOfferThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelOfferThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
