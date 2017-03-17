"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FuelDetail = (function () {
    function FuelDetail(priceAverage, priceMax, priceMin, priceYesterday, priceThreshold, priceTerminal, trend, suggest, lastUpdated) {
        this.priceAverage = priceAverage;
        this.priceMax = priceMax;
        this.priceMin = priceMin;
        this.priceYesterday = priceYesterday;
        this.priceThreshold = priceThreshold;
        this.priceTerminal = priceTerminal;
        this.trend = trend;
        this.suggest = suggest;
        this.lastUpdated = lastUpdated;
    }
    return FuelDetail;
}());
exports.FuelDetail = FuelDetail;
/*
"PriceAverage": 118.5,
"PriceMax": 139.9,
"PriceMin": 109.3,
"PriceYesterday": 118.6,
"PriceThreshold": 116.9,
"PriceTerminal": 115.98,
"Trend": -1,
"Suggest": 3,
"LastUpdated": "09 Mar 2017 18:59:02"
*/ 
//# sourceMappingURL=fuelDetail.js.map