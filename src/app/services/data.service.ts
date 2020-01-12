import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public data = new BehaviorSubject({});

    constructor() { }

    changeMessage(data: any) {
        this.data.next(data)
    }
}