import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-booking-details',
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss']
})
export class BookingDetailsComponent implements OnInit {

  bookingDetails: any = {};
  constructor(
    public dataService: DataService,
    public router: Router,
    private toastrService: ToastrService
  ) { }

  ngOnInit() {
    this.bookingDetails = this.dataService.data.getValue();
    if (this.bookingDetails.from === undefined) {
      this.router.navigate(['/booking']);
    }    
  }

  onConfirm() {
    this.toastrService.success('','Booking successfull.');
    setTimeout(()=> {
      this.router.navigate(['/booking']);
    }, 3000);
  }

  onCancel() {
    this.toastrService.success('','Booking cancelled.');
    this.router.navigate(['/booking']);
  }
}
