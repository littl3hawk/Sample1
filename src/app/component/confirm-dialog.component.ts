import { MdDialogRef } from '@angular/material';
import { Component } from '@angular/core';

@Component({
    selector: 'confirm-dialog',
    template: `
        <h1 md-dialog-title>{{ title }}</h1>
        <div md-dialog-content>{{ message }}</div>
        <div md-dialog-actions>
            <button md-button (click)="dialogRef.close('Option 1')">Option 1!</button>
            <button md-button (click)="dialogRef.close('Option 2')">Option 2!</button>
        </div>
    `,
})

//        <button type="button" md-raised-button (click)="dialogRef.close(true)">OK</button>
//        <button type="button" md-button (click)="dialogRef.close()">Cancel</button>

export class ConfirmDialog {
    public title: string;

    public message: string;

    constructor(public dialogRef: MdDialogRef<ConfirmDialog>) { }
}