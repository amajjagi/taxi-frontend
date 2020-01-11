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
        return this.httpClient.get("https://api.myjson.com/bins/18h93q");
    }
}