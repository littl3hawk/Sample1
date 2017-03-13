import { Component, OnInit } from '@angular/core';

import { FuelDetail } from '../type/fuel-detail';
import { FuelDetailService } from '../service/fuel-detail.service';

@Component({
    moduleId: module.id,
    selector: 'my-fuel',
    templateUrl: './fuel.component.html'
})

export class FuelComponent implements OnInit {
    fuelDetail: FuelDetail;

    constructor(private fuelDetailService: FuelDetailService) { }

    getFuelDetail(): void {
        //console.info('get fuel');

        // Sync
        //this.fuelDetail1 = this.heroService.getHeroes();

        // Async
        this.fuelDetailService.getFuelDetail().then(x => {
            this.fuelDetail = x;
            //console.info('async comp');
            console.info(x);
        });

        // Async with 2 second delay
        //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);    
    }

    ngOnInit(): void {
        this.getFuelDetail();
    }
}


/*

function setTrend(item, field, element, iconElement) {
	var text = '';
	var icon = '';

	if (item && item[field] != null & item[field] !== undefined) {
		var value = item[field];

		switch (item[field]){
			case -1:
				text = 'Down';
				icon = 'vertical_align_bottom';
				break;
			case 0:
				text = 'Level';
				icon = 'vertical_align_center';
				break;
			case 1:
				text = 'Up';
				icon = 'vertical_align_top';
				break;
			default:
				text = 'Unknown';
				icon = 'help_outline';
				break;
		}

		text = 'Trend - ' + text;
	}

	element.html(text);

	if (icon != ''){
		iconElement.html(icon);
		iconElement.show();
	}
	else {
		iconElement.hide();
	}
}


function setSuggest(item, field, element) {
	if (item && item[field] != null & item[field] !== undefined) {
		var text = '';
		var value = item[field];

		switch (item[field]){
			case 1:
				text = 'Don\'t buy';
				break;
			case 2:
				text = 'Wait / Top up';
				break;
			case 3:
				text = 'Buy now'
				break;
		}

		element.html(text);
	}
	else {
		element.html('');
	}
}
*/