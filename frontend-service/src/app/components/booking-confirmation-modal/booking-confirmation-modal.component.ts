import {Component, Input, OnInit} from '@angular/core';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {TripOffer} from "../../model/tripoffer.model";

@Component({
  selector: 'booking-confirmation-modal',
  templateUrl: './booking-confirmation-modal.component.html',
  styleUrls: ['./booking-confirmation-modal.component.scss']
})
export class BookingConfirmationModalComponent implements OnInit {

  @Input('trip-offer')
  private tripOffer: TripOffer;

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed`;
    });
  }

  ngOnInit() {
  }

  confirmBooking() {
    console.log(this.tripOffer);
  }

}
