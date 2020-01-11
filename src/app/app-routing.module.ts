import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookingHomeComponent } from './feature/booking-home/booking-home.component';

const routes: Routes = [
    { path: 'booking', component: BookingHomeComponent }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }