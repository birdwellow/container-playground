import { Component, OnInit } from '@angular/core';
import {Input} from "@angular/core";
import {City} from "../../model/city.model";

@Component({
  selector: 'city-thumbnail',
  templateUrl: './city-thumbnail.component.html',
  styleUrls: ['./city-thumbnail.component.scss']
})
export class CityThumbnailComponent implements OnInit {

  @Input("city") city: City;

  constructor() { }

  ngOnInit() {
  }

}
