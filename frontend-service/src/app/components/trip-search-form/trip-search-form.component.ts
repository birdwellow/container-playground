import {Component, OnInit} from '@angular/core';
import {City} from "../../model/city";
import {NavigationExtras, Router} from "@angular/router";
import {TripBookingService} from "../../services/trip-booking.service";

@Component({
  selector: 'trip-search-form',
  templateUrl: './trip-search-form.component.html',
  styleUrls: ['./trip-search-form.component.scss']
})
export class TripSearchFormComponent implements OnInit {

  constructor(private tripBookingService: TripBookingService, private router: Router) { }

  start: string = 'Munich';
  destination: string;
  arrival: string = '2018-04-23';
  departure: string = '2018-05-04';
  persons: number = 2;
  price: number;

  cities: Array<City>;

  ngOnInit() {
    this.tripBookingService.getAvailableCities().subscribe((cities: Array<City>) => {
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
