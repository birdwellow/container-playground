import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TripSearchFormComponent} from "./components/trip-search-form/trip-search-form.component";
import {TripSearchResultsComponent} from "./components/trip-search-results/trip-search-results.component";
import {BookingComponent} from "./components/booking/booking.component";

const routes: Routes = [];

const appRoutes: Routes = [
  { path: 'search', component: TripSearchFormComponent },
  { path: 'trips', component: TripSearchResultsComponent },
  { path: 'booking', component: BookingComponent },
  { path: '**',   redirectTo: '/search', pathMatch: 'full' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
