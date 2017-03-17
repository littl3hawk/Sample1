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
var fuel_trend_service_1 = require("../service/fuel-trend.service");
var FuelTrendComponent = (function () {
    function FuelTrendComponent(fuelTrendService) {
        this.fuelTrendService = fuelTrendService;
    }
    FuelTrendComponent.prototype.getFuelTrend = function () {
        //console.info('get fuel trend');
        var _this = this;
        this.fuelTrendService.getFuelTrend().then(function (x) {
            _this.fuelTrend = x;
            //console.info('async comp');
            console.info(x);
        });
        // Async with 2 second delay
        //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);    
    };
    FuelTrendComponent.prototype.ngOnInit = function () {
        this.getFuelTrend();
    };
    return FuelTrendComponent;
}());
FuelTrendComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-fuel-trend',
        templateUrl: './fuel-trend.component.html'
    }),
    __metadata("design:paramtypes", [fuel_trend_service_1.FuelTrendService])
], FuelTrendComponent);
exports.FuelTrendComponent = FuelTrendComponent;
//# sourceMappingURL=fuel-trend.component.js.map