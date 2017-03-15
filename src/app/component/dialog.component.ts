import { Component, OnInit, Input } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

@Component({
    moduleId: module.id,
    selector: 'dialog-result-example-dialog',
    templateUrl: './dialog.component.html',
    /*template: `<h1 md-dialog-title>Dialog</h1>
<div md-dialog-content>What would you like to do?</div>
<div md-dialog-actions>
  <button md-button (click)="dialogRef.close('Option 1')">Option 1?</button>
  <button md-button (click)="dialogRef.close('Option 2')">Option 2?</button>
</div>`*/
})

export class DialogComponent {
    constructor(public dialogRef: MdDialogRef<DialogComponent>) { }

    public title: string;

    public message: string;
}