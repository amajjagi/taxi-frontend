import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingHomeComponent } from './feature/booking-home/booking-home.component';
import { BookingDetailsComponent } from './feature/booking-details/booking-details.component';

const routes: Routes = [
    { path: 'booking', component: BookingHomeComponent },
    { path: 'booking-details', component: BookingDetailsComponent }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }