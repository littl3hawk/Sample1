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
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.title = 'Sample 1';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'main-app',
        styles: ["\n        nav a.active {\n            font-style: italic;\n        }\n    "],
        template: "\n        <h1>Hiya! First Component</h1>\n        <h1>{{title}}</h1>\n\n        <nav>\n            <a routerLink=\"/fuel\" routerLinkActive=\"active\">Fuel</a> || \n            <a routerLink=\"/feed\" routerLinkActive=\"active\">Feed</a> || \n            <a routerLink=\"/pdf\" routerLinkActive=\"active\">Pdf</a> || \n            <a routerLink=\"/hero\" routerLinkActive=\"active\">Hero</a>\n\n            [<a [routerLink]=\"['/hero-detail', 15]\" routerLinkActive=\"active\">Detail H15</a>]\n        </nav>\n\n        <hr/>\n        <router-outlet></router-outlet>\n        <hr/>\n"
    }),
    __metadata("design:paramtypes", [])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map