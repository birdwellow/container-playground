import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import { TravelOfferThumbnailComponent } from './travel-offer-thumbnail/travel-offer-thumbnail.component';

@NgModule({
  declarations: [
    AppComponent,
    TravelOfferThumbnailComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
