import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    //moduleId: module.id,
    selector: 'my-hero',
    //templateUrl: 'feature.component.html'
    template: `

<h2>My Heroes</h2>
<ul class="heroes">
  <li *ngFor="let hero of heroes"
    [class.selected]="hero === selectedHero"
    (click)="onSelect(hero)">
    <span class="badge">{{hero.id}}</span> {{hero.name}}
  </li>
</ul>
<div *ngIf="selectedHero">
  <h2>
    {{selectedHero.name | uppercase}} is my hero
  </h2>
  <button (click)="gotoDetail()">View Details</button>
</div>
    
`
})

export class HeroComponent implements OnInit {
    heroes: Hero[];
    selectedHero: Hero;

/*
          <h2>My favorite hero is: myHero.name</h2>
  <p>Heroes:</p>
  <ul>
    <li *ngFor="let hero of heroes">
      {{ hero.name }}
      </li>
  </ul>
  <p *ngIf="heroes.length > 3">There are many heroes!</p>

  <p>Hero Count: {{heroes.length}}</p>

  <hr/>
  <button (click)="onClickMe()">Click me!</button> */

    /*heroes = [
        new Hero(1, 'Hero 1', 'P1'),
        new Hero(2, 'Hero 2', 'P2'),
        new Hero(3, 'Hero 3', 'P3'),
        new Hero(4, 'Hero 4', 'P4'),
        new Hero(5, 'Hero 5', 'P5')
    ];
    myHero = this.heroes[0];*/

    //constructor() { }

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }


    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }
}