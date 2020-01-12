import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
    constructor(
        public httpClient: HttpClient
    ) {}

    public getCities () {
        return this.httpClient.get("https://blooming-mountain-13531.herokuapp.com/cities");
    }

    public getBookingDetails(data) {
        return this.httpClient.get(`https://blooming-mountain-13531.herokuapp.com/booking-details?from=${data.from}&to=${data.to}&departdate=${data.departdate}`)
    }
}