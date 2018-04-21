import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'trip-search-results',
  templateUrl: './trip-search-results.component.html',
  styleUrls: ['./trip-search-results.component.scss']
})
export class TripSearchResultsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private http: HttpClient) { }

  private travelOffers: Array<any>;

  ngOnInit() {
    let queryParams: any = {};
    for (let key of this.route.snapshot.queryParamMap.keys) {
      queryParams[key] = this.route.snapshot.queryParamMap.get(key);
    }

    this.http.get('http://localhost:8080/trips/offers', {params: queryParams})
            .subscribe((travelOffers: Array<any>) => {
      console.log(travelOffers);
                this.travelOffers = travelOffers;
            });
  }

}
