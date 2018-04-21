import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {City} from "../../model/city.model";

@Component({
  selector: 'city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  cities: Array<City>;

  ngOnInit() {
    this.http.get('http://localhost:8080/cities').subscribe((cities: Array<City>) => {
      this.cities = cities;
    })
  }

}
