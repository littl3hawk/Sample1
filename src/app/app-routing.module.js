"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var feed_component_1 = require("./feed/feed.component");
var fuel_component_1 = require("./fuel/fuel.component");
var hero_component_1 = require("./hero/hero.component");
var hero_detail_component_1 = require("./hero/hero-detail.component");
var pdf_component_1 = require("./pdf/pdf.component");
var routes = [
    //{ path: 'detail/:id', component: HeroDetailComponent },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'feed', component: feed_component_1.FeedComponent },
    { path: 'fuel', component: fuel_component_1.FuelComponent },
    { path: 'hero', component: hero_component_1.HeroComponent },
    { path: 'hero-detail/:id', component: hero_detail_component_1.HeroDetailComponent },
    { path: 'pdf', component: pdf_component_1.PdfComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map