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
var pdf_service_1 = require("../service/pdf.service");
var dialogs_service_1 = require("../service/dialogs.service");
var PdfComponent = (function () {
    function PdfComponent(pdfService, dialogsService) {
        this.pdfService = pdfService;
        this.dialogsService = dialogsService;
    }
    PdfComponent.prototype.getPdf = function () {
        // Sync
        //this.fuelDetail1 = this.heroService.getHeroes();
        var _this = this;
        // Async
        this.pdfService.getPdf().then(function (x) {
            var wrapper = x;
            if (wrapper) {
                _this.files = x.files;
                _this.folders = x.folders;
                _this.categories = x.categories;
            }
            console.info('pdf async comp');
            console.info(_this.files);
            console.info(_this.folders);
            console.info(_this.categories);
        });
        // Async with 2 second delay
        //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);    
    };
    PdfComponent.prototype.ngOnInit = function () {
        this.getPdf();
        this.contentFolder = 'http://192.168.0.80/pdf/content';
    };
    PdfComponent.prototype.onSelectFolder = function (folder) {
        this.selectedFolder = this.selectedFolder && this.selectedFolder.id == folder.id ? null : folder;
        this.updateSelectedFiles();
    };
    PdfComponent.prototype.updateSelectedFiles = function () {
        var _this = this;
        this.selectedFiles = this.selectedFolder ? this.files.filter(function (x) { return x.folderId == _this.selectedFolder.id; }) : null;
    };
    PdfComponent.prototype.onSelectFile = function (file) {
        var url = this.contentFolder + "/" + this.selectedFolder.name + "/" + file.name + ".pdf";
        console.info('select file:' + file.name);
        console.info(url);
        window.open(url, '_blank');
    };
    PdfComponent.prototype.onSelectFavourite = function (file) {
        console.info('select fav: ' + file.displayName);
        if (file.isFavourite) {
            console.info('currently is isFavourite');
        }
        else {
            console.info('currently not a Favourite');
        }
        file.isFavourite = !file.isFavourite;
        this.pdfService.setFavourite(file)
            .then(function () {
            //
        });
    };
    PdfComponent.prototype.onSelectCategory = function (file) {
        console.info('select category: ' + file.displayName);
        this.pdfService.setCategory(file)
            .then(function () {
            //
        });
    };
    PdfComponent.prototype.onSelectRemove = function (file) {
        var _this = this;
        this.dialogsService
            .confirmYesNo('Remove', "Are you sure you want to remove " + file.displayName + "?", true)
            .subscribe(function (result) {
            if (result === true) {
                console.info('Result is true - delete the file');
                _this.pdfService
                    .delete(file)
                    .then(function () {
                    _this.files = _this.files.filter(function (x) { return x.id !== file.id; });
                    _this.updateSelectedFiles();
                });
            }
        });
    };
    PdfComponent.prototype.getCategoryName = function (categoryId) {
        if (categoryId && categoryId > 0) {
            var category = this.categories.find(function (x) { return x.id == categoryId; });
            if (category) {
                return category.name;
            }
        }
        return '';
    };
    return PdfComponent;
}());
PdfComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-pdf',
        styleUrls: ['./pdf.component.css'],
        templateUrl: './pdf.component.html'
    }),
    __metadata("design:paramtypes", [pdf_service_1.PdfService, dialogs_service_1.DialogsService])
], PdfComponent);
exports.PdfComponent = PdfComponent;
//# sourceMappingURL=pdf.component.js.map