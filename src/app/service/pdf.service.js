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
var pdf_wrapper_1 = require("../type/pdf-wrapper");
var PdfService = (function () {
    function PdfService(http) {
        this.http = http;
        this.fuelUrl = 'api/fuel'; // URL to web api
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
        });
    }
    PdfService.prototype.getFuelTrendMock = function () {
        console.info('get fuel trend');
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
    PdfService.prototype.getPdf = function () {
        var url = 'http://192.168.0.80/pdf/data/list2.php';
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            //console.info('promise');
            //console.info(response);
            //console.info(response.json());
            //console.info(response.json().data);
            var data = response.json();
            var files = data.files;
            var folders = data.folders;
            var categories = data.categories;
            //console.info('source data');
            //console.info(data);
            //console.info('folders');
            //console.info(folders);
            //console.info('categories');
            //console.info(categories);
            //return response.json().data as PdfFolder[]
            return new pdf_wrapper_1.PdfWrapper(files, folders, categories);
        })
            .catch(this.handleError);
    };
    PdfService.prototype.setFavourite = function (file) {
        return Promise.resolve(file);
        /*return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);*/
    };
    PdfService.prototype.setCategory = function (file) {
        return Promise.resolve(file);
        /*return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);*/
    };
    PdfService.prototype.delete = function (file) {
        return Promise.resolve(null);
        /*return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);*/
    };
    PdfService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return PdfService;
}());
PdfService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PdfService);
exports.PdfService = PdfService;
//# sourceMappingURL=pdf.service.js.map