import { Component, OnInit } from '@angular/core';

import { FuelTrend } from '../type/fuel-trend';
import { FuelTrendService } from '../service/fuel-trend.service';

@Component({
    moduleId: module.id,
    selector: 'my-fuel-trend',
    templateUrl: './fuel-trend.component.html'
})

export class FuelTrendComponent implements OnInit {
    fuelTrend: FuelTrend[];

    constructor(private fuelTrendService: FuelTrendService) { }

    getFuelTrend(): void {
        //console.info('get fuel trend');

        this.fuelTrendService.getFuelTrend().then(x => {
            this.fuelTrend = x;
            //console.info('async comp');
            console.info(x);
        });

        // Async with 2 second delay
        //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);    
    }

    ngOnInit(): void {
        this.getFuelTrend();
    }
}