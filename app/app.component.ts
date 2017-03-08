import {Component} from 'angular2/core';

@Component({
   selector: 'main-app',
   template: '<h1>Hiya! First Component</h1>'
})

export class AppComponent{
    constructor() {}
}

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