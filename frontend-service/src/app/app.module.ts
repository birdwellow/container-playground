import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { CityListComponent } from './components/city-list/city-list.component';
import { CityThumbnailComponent } from './components/city-thumbnail/city-thumbnail.component';
import { TripSearchFormComponent } from './components/trip-search-form/trip-search-form.component';
import {FormsModule} from "@angular/forms";
import { TripSearchResultsComponent } from './components/trip-search-results/trip-search-results.component';
import { BookingComponent } from './components/booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityThumbnailComponent,
    TripSearchFormComponent,
    TripSearchResultsComponent,
    BookingComponent
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
