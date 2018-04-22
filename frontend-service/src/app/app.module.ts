import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { TripSearchFormComponent } from './components/trip-search-form/trip-search-form.component';
import {FormsModule} from "@angular/forms";
import { TripSearchResultsComponent } from './components/trip-search-results/trip-search-results.component';
import { BookingComponent } from './components/booking/booking.component';
import { BookingConfirmationModalComponent } from './components/booking-confirmation-modal/booking-confirmation-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    TripSearchFormComponent,
    TripSearchResultsComponent,
    BookingComponent,
    BookingConfirmationModalComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
