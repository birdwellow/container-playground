import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  arrival: string;
  departure: string;
  destination: string;
  hotel: string;
  persons: number;

  valid: boolean = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.arrival = this.route.snapshot.queryParamMap.get('arrival');
    this.departure = this.route.snapshot.queryParamMap.get('departure');
    this.destination = this.route.snapshot.queryParamMap.get('destination');
    this.hotel = this.route.snapshot.queryParamMap.get('hotel');
    this.persons = +this.route.snapshot.queryParamMap.get('persons');

    this.valid = !!(this.arrival && this.destination && this.departure && this.hotel && this.persons);
  }

}
