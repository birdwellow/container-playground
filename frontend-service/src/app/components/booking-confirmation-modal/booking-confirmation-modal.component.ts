import {Component, Input, OnInit} from '@angular/core';

import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {TripOffer} from "../../model/tripoffer";
import {NavigationExtras, Router} from "@angular/router";
import {TripBookingService} from "../../services/trip-booking.service";
import {Booking} from "../../model/booking";

@Component({
  selector: 'booking-confirmation-modal',
  templateUrl: './booking-confirmation-modal.component.html',
  styleUrls: ['./booking-confirmation-modal.component.scss']
})
export class BookingConfirmationModalComponent implements OnInit {

  @Input('trip-offer')
  tripOffer: TripOffer;

  bookingInProgress: boolean = false;
  modal: NgbModalRef;

  constructor(private modalService: NgbModal, private tripBookingService: TripBookingService, private router: Router) {}

  open(content) {
    this.modal = this.modalService.open(content);
  }

  ngOnInit() {
  }

  confirmBooking() {
    this.bookingInProgress = true;
    setTimeout(() => {
      let booking: Booking = {
        outboundFlightId: this.tripOffer.outboundFlight._id,
        hotelId: this.tripOffer.hotel._id,
        inboundFlightId: this.tripOffer.inboundFlight._id,
        persons: this.tripOffer.persons
      };
      this.tripBookingService.bookTrip(booking).subscribe((result) => {
        this.bookingInProgress = false;
        this.modal.close();

        let queryParams: any = {
          arrival: this.tripOffer.inboundFlight.date,
          departure: this.tripOffer.outboundFlight.date,
          destination: this.tripOffer.hotel.city,
          hotel: this.tripOffer.hotel.name,
          persons: this.tripOffer.persons
        };

        let navigationExtras: NavigationExtras = {
          queryParams: queryParams
        };

        this.router.navigate(['/booking'], navigationExtras);
      });
    }, 1500);
  }

}
