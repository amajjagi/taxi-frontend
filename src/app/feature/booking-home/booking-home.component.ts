import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-booking-home',
  templateUrl: './booking-home.component.html',
  styleUrls: ['./booking-home.component.scss']
})
export class BookingHomeComponent implements OnInit {
  cities: any = [];
  myForm: FormGroup;

  constructor(
    private commonService: CommonService,
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.commonService.getCities().subscribe(resp => {
      this.cities = resp;
      this.myForm.controls.from.setValue(this.cities[0].name);
    });

    
    this.myForm = this.fb.group({
      from: ['', Validators.required],
      to: ['', Validators.required],
      departdate: ['', Validators.required]
    });
  }

  getBookingDetails() {
    
    this.commonService.getBookingDetails(this.myForm.value).subscribe(resp => {
      this.dataService.changeMessage(resp);
      this.router.navigate(['/booking-details']);
    });
  }
}
