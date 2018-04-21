import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {City} from "../../model/city.model";

@Component({
  selector: 'trip-data-form',
  templateUrl: './trip-data-form.component.html',
  styleUrls: ['./trip-data-form.component.scss']
})
export class TripDataFormComponent implements OnInit {

  constructor(private http: HttpClient) { }

  start: string = 'Munich';
  destination: string;
  arrival: string = '2018-04-23T00:00:00';
  departure: string = '2018-05-04T00:00:00';
  persons: number = 2;
  price: number;

  cities: Array<City>;

  ngOnInit() {
    this.http.get('http://localhost:8080/cities').subscribe((cities: Array<City>) => {
      this.cities = cities;
    });

  }

}
