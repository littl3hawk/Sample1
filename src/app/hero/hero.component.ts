import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    moduleId: module.id,
    selector: 'my-hero',
    styleUrls: ['hero.component.css'],
    /*styles: [`
      .zippy {
        background: green;
      }
    `],*/
    templateUrl: 'hero.component.html'
})

export class HeroComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

    constructor(private router: Router, private heroService: HeroService) { }

    getHeroes(): void {
        // Sync
        // this.heroes = this.heroService.getHeroes();

        // Async
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);

        // Async with 2 second delay
        //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);    
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    add(name: string): void {
        name = name.trim();

        if (!name) {
            return;
        }

        this.heroService.create(name)
            .then(hero => {
                this.heroes.push(hero);
                this.selectedHero = null;
            });
    }

    delete(hero: Hero): void {
        this.heroService
            .delete(hero.id)
            .then(() => {
                this.heroes = this.heroes.filter(h => h !== hero);
                if (this.selectedHero === hero) { this.selectedHero = null; }
            });
    }

    gotoDetail(): void {
        this.router.navigate(['/hero-detail', this.selectedHero.id]);
    }
}