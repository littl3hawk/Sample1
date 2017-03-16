import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'confirm-dialog',
    templateUrl: './confirm-dialog.component.html'
})

export class ConfirmDialog {
    public title: string;

    public message: string;

    public buttons: ConfirmDialogButton[];

    constructor(public dialogRef: MdDialogRef<ConfirmDialog>) { }
}

export class ConfirmDialogButton {
    constructor(public text: string, public value: any) { }
}