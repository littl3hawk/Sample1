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
var router_1 = require("@angular/router");
var hero_service_1 = require("../service/hero.service");
var HeroComponent = (function () {
    function HeroComponent(router, heroService) {
        this.router = router;
        this.heroService = heroService;
    }
    HeroComponent.prototype.getHeroes = function () {
        // Sync
        // this.heroes = this.heroService.getHeroes();
        var _this = this;
        // Async
        this.heroService.getHeroes().then(function (heroes) { return _this.heroes = heroes; });
        // Async with 2 second delay
        //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);    
    };
    HeroComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    HeroComponent.prototype.add = function (name) {
        var _this = this;
        name = name.trim();
        if (!name) {
            return;
        }
        this.heroService.create(name)
            .then(function (hero) {
            _this.heroes.push(hero);
            _this.selectedHero = null;
        });
    };
    HeroComponent.prototype.delete = function (hero) {
        var _this = this;
        this.heroService
            .delete(hero.id)
            .then(function () {
            _this.heroes = _this.heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    HeroComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/hero-detail', this.selectedHero.id]);
    };
    return HeroComponent;
}());
HeroComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-hero',
        styleUrls: ['hero.component.css'],
        /*styles: [`
          .zippy {
            background: green;
          }
        `],*/
        templateUrl: 'hero.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, hero_service_1.HeroService])
], HeroComponent);
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=hero.component.js.map