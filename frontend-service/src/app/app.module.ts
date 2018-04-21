import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { CityListComponent } from './components/city-list/city-list.component';
import { CityThumbnailComponent } from './components/city-thumbnail/city-thumbnail.component';
import { TripDataFormComponent } from './components/trip-data-form/trip-data-form.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CityListComponent,
    CityThumbnailComponent,
    TripDataFormComponent
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
