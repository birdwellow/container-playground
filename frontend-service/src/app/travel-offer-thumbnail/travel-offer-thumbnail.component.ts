import {Component, Input, OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';
import {TravelOffer} from "../traveloffer.model";

@Component({
  selector: 'travel-offer-thumbnail',
  templateUrl: './travel-offer-thumbnail.component.html',
  styleUrls: ['./travel-offer-thumbnail.component.scss']
})
export class TravelOfferThumbnailComponent implements OnInit {

  constructor() { }

  @Input('value')
  travelOffer: TravelOffer = null;

  ngOnInit() {
  }

}
