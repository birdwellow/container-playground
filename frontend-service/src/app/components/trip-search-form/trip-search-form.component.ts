import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {City} from "../../model/city.model";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'trip-search-form',
  templateUrl: './trip-search-form.component.html',
  styleUrls: ['./trip-search-form.component.scss']
})
export class TripSearchFormComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  start: string = 'Munich';
  destination: string;
  arrival: string = '2018-04-23';
  departure: string = '2018-05-04';
  persons: number = 2;
  price: number;

  cities: Array<City>;

  ngOnInit() {
    this.http.get('http://localhost:8080/cities').subscribe((cities: Array<City>) => {
      this.cities = cities;
    });
  }

  setDestination(city: City) {
    this.destination = city.name;
  }

  onSubmit() {
    let queryParams: any = {
      start: this.start,
      destination: this.destination,
      arrival: this.arrival,
      departure: this.departure,
      persons: this.persons
    };
    if (this.price > 0) {
      queryParams.price = this.price;
    }

    let navigationExtras: NavigationExtras = {
      queryParams: queryParams
    };


    this.router.navigate(['/trips'], navigationExtras);
  }

}
