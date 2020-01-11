import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-booking-home',
  templateUrl: './booking-home.component.html',
  styleUrls: ['./booking-home.component.scss']
})
export class BookingHomeComponent implements OnInit {
  cities: any = [];
  selected: string;
  constructor(
    private commonService: CommonService
  ) { }

  ngOnInit() {
    this.commonService.getCities().subscribe(resp => {
      this.cities = resp;
      this.selected = this.cities[0].name;
    });
  }

}
