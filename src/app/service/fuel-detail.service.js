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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var FuelDetailService = (function () {
    function FuelDetailService(http) {
        this.http = http;
        this.fuelUrl = 'api/fuel'; // URL to web api
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
    }
    FuelDetailService.prototype.getFuelDetailMock = function () {
        console.info('get fuel detail');
        return this.http.get(this.fuelUrl)
            .toPromise()
            .then(function (response) {
            console.info('promise');
            console.info(response);
            console.info(response.json());
            console.info(response.json().data);
            return response.json().data;
        })
            .catch(this.handleError);
    };
    FuelDetailService.prototype.getFuelDetail = function () {
        //console.info('get fuel detail');
        var url = 'http://192.168.0.80/fuel/data/summary.php';
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            //console.info('promise');
            //console.info(response);
            //console.info(response.json());
            //console.info(response.json().data);
            return response.json().data;
        })
            .catch(this.handleError);
    };
    /*getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }*/
    /*getHeroes(): Promise<Hero[]> {
        console.info('get heroes');

        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }*/
    /*getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }*/
    /*getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }*/
    /*getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;

        console.info('getHero: ' + url);

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }*/
    /*update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }*/
    /*create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }*/
    /*delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }*/
    FuelDetailService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return FuelDetailService;
}());
FuelDetailService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FuelDetailService);
exports.FuelDetailService = FuelDetailService;
//# sourceMappingURL=fuel-detail.service.js.map