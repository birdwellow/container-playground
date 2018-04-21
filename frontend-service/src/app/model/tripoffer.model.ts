import {Hotel} from "./hotel";
import {Flight} from "./flight";

export interface TripOffer {

  hotel: Hotel;
  inboundFlight: Flight;
  outboundFlight: Flight;
  price: number;

}
