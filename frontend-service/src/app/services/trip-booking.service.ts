import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {TripOffer} from "../model/tripoffer";
import {Booking} from "../model/booking";

@Injectable()
export class TripBookingService {

  private baseUrl: string = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  public getAvailableCities(): Observable<Object> {
    return this.http.get(`${this.baseUrl}/cities`);
  }

  public getTripOffers(searchParameters: any): Observable<Object> {
    return this.http.get(`${this.baseUrl}/trips/offers`, {params: searchParameters});
  }

  public bookTrip(booking: Booking): Observable<Object> {
    return this.http.post(`${this.baseUrl}/trips/booking`, booking);
  }

}
