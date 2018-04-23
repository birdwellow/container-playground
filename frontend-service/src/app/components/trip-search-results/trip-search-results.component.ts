import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TripOffer} from "../../model/tripoffer";
import {TripBookingService} from "../../services/trip-booking.service";

@Component({
  selector: 'trip-search-results',
  templateUrl: './trip-search-results.component.html',
  styleUrls: ['./trip-search-results.component.scss']
})
export class TripSearchResultsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private tripBookingService: TripBookingService) {
  }

  searchParameters: any = null;
  tripOffers: Array<TripOffer>;

  ngOnInit() {
    this.searchParameters = {};
    for (let key of this.route.snapshot.queryParamMap.keys) {
      this.searchParameters[key] = this.route.snapshot.queryParamMap.get(key);
    }

    this.tripBookingService.getTripOffers(this.searchParameters)
      .subscribe((tripOffers: Array<TripOffer>) => {
        this.tripOffers = tripOffers || [];
      });
  }

}
