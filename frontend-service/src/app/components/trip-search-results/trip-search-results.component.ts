import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {TripOffer} from "../../model/tripoffer.model";

@Component({
  selector: 'trip-search-results',
  templateUrl: './trip-search-results.component.html',
  styleUrls: ['./trip-search-results.component.scss']
})
export class TripSearchResultsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) {
  }

  private searchParameters: any = null;
  private tripOffers: Array<TripOffer>;

  ngOnInit() {
    this.searchParameters = {};
    for (let key of this.route.snapshot.queryParamMap.keys) {
      this.searchParameters[key] = this.route.snapshot.queryParamMap.get(key);
    }

    this.http
      .get('http://localhost:8080/trips/offers', {params: this.searchParameters})
      .subscribe((tripOffers: Array<TripOffer>) => {
        if (!tripOffers) {
          return;
        }
        this.tripOffers = tripOffers;
        console.log(this.tripOffers);
      });
  }

}
