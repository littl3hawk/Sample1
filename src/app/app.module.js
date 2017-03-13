"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var feed_component_1 = require("./feed/feed.component");
var fuel_component_1 = require("./fuel/fuel.component");
var fuel_trend_component_1 = require("./fuel/fuel-trend.component");
var hero_component_1 = require("./hero/hero.component");
var hero_detail_component_1 = require("./hero/hero-detail.component");
var pdf_component_1 = require("./pdf/pdf.component");
var hero_service_1 = require("./service/hero.service");
var fuel_detail_service_1 = require("./service/fuel-detail.service");
var fuel_trend_service_1 = require("./service/fuel-trend.service");
var pdf_service_1 = require("./service/pdf.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            //InMemoryWebApiModule.forRoot(InMemoryDataService),
            app_routing_module_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            feed_component_1.FeedComponent,
            fuel_component_1.FuelComponent,
            fuel_trend_component_1.FuelTrendComponent,
            hero_component_1.HeroComponent,
            hero_detail_component_1.HeroDetailComponent,
            pdf_component_1.PdfComponent
        ],
        providers: [
            hero_service_1.HeroService,
            fuel_detail_service_1.FuelDetailService,
            fuel_trend_service_1.FuelTrendService,
            pdf_service_1.PdfService
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map