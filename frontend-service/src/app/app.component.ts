import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TravelOffer} from "./traveloffer.model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'app';

  travelOffers: Array<TravelOffer> = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/traveloffers').subscribe((travelOffers: Array<TravelOffer>) => {
      this.travelOffers = travelOffers;
    })
  }
}
