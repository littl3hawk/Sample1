import { Component, OnInit } from '@angular/core';
import { FuelDetail } from '../fuelDetail';

@Component({
    moduleId: module.id,
    selector: 'my-fuel',
    templateUrl: './fuel.component.html'
})
export class FuelComponent implements OnInit {
    fuelDetail = new FuelDetail(118.5, 139.9, 109.3, 118.6, 116.9, 115.98, -1, 3, '09 Mar 2017 18:59:02');

    constructor() { }

    ngOnInit() { 
        //
    }
}