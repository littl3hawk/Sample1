import { Component } from '@angular/core';

@Component({
    selector: 'main-app',
    template: `
        <h1>Hiya! First Component</h1>
        <h1>{{title}}</h1>

        <nav>
            <a routerLink="/fuel">Fuel</a> || 
            <a routerLink="/feed">Feed</a> || 
            <a routerLink="/pdf">Pdf</a> || 
            <a routerLink="/hero">Hero</a>
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