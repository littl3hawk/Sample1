"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fuel_detail_service_1 = require("../service/fuel-detail.service");
var FuelComponent = (function () {
    function FuelComponent(fuelDetailService) {
        this.fuelDetailService = fuelDetailService;
    }
    FuelComponent.prototype.getFuelDetail = function () {
        //console.info('get fuel');
        var _this = this;
        // Sync
        //this.fuelDetail1 = this.heroService.getHeroes();
        // Async
        this.fuelDetailService.getFuelDetail().then(function (x) {
            _this.fuelDetail = x;
            //console.info('async comp');
            console.info(x);
        });
        // Async with 2 second delay
        //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);    
    };
    FuelComponent.prototype.ngOnInit = function () {
        this.getFuelDetail();
    };
    return FuelComponent;
}());
FuelComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-fuel',
        templateUrl: './fuel.component.html'
    }),
    __metadata("design:paramtypes", [fuel_detail_service_1.FuelDetailService])
], FuelComponent);
exports.FuelComponent = FuelComponent;
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
//# sourceMappingURL=fuel.component.js.map