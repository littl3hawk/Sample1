import { Component } from '@angular/core';

//import './style/styles.css';

@Component({
    selector: 'main-app',
    styles: [`
        nav a.active {
            font-style: italic;
        }
    `],
    ////styleUrls: ['./app.component.css'],
    ////templateUrl: './app.component.html',
    template: `
        <h1>Hiya! First Component</h1>
        <h1>{{title}}</h1>

        <img src="app/image/angular.png">

        <nav>
            <a routerLink="/fuel" routerLinkActive="active">Fuel</a> || 
            <a routerLink="/feed" routerLinkActive="active">Feed</a> || 
            <a routerLink="/pdf" routerLinkActive="active">Pdf</a> || 
            <a routerLink="/hero" routerLinkActive="active">Hero</a>

            [<a [routerLink]="['/hero-detail', 15]" routerLinkActive="active">Detail H15</a>]
        </nav>

        <hr/>
        <router-outlet></router-outlet>
        <hr/>
`
})

export class AppComponent {
    name = 'Angular';
    title = 'Sample 1';

    constructor() { }


    /*import { Component, OnInit } from '@angular/core';
    
    @Component({
        moduleId: module.id,
        selector: 'selector',
        templateUrl: 'feature.component.html'
    })
    
    export class AppComponent *implements OnInit* {
        constructor() { }
    
        *ngOnInit() { }*
    }*/
}