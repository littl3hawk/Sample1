import { MdDialogRef, MdDialog, MdDialogConfig } from '@angular/material';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ConfirmDialog, ConfirmDialogButton } from '../component/dialog.component';

@Injectable()
export class DialogsService {
    constructor(private dialog: MdDialog) { }

    public confirmCustom(title: string, message: string, disableClose: boolean, buttons: ConfirmDialogButton[]): Observable<boolean> {
        return this.setupDialog(title, message, disableClose, buttons);
    }

    public confirmYesNo(title: string, message: string, disableClose: boolean): Observable<boolean> {
        return this.setupDialog(title, message, disableClose, [new ConfirmDialogButton('Yes', true), new ConfirmDialogButton('No', false)]);
    }

    public message(title: string, message: string, disableClose: boolean, buttonText: string): Observable<boolean> {
        return this.setupDialog(title, message, disableClose, [new ConfirmDialogButton(buttonText, true)]);
    }

    private setupDialog(title: string, message: string, disableClose: boolean, buttons: ConfirmDialogButton[]): Observable<boolean> {
        let dialogRef: MdDialogRef<ConfirmDialog>;

        dialogRef = this.dialog.open(ConfirmDialog);

        dialogRef.componentInstance.title = title;
        dialogRef.componentInstance.message = message;
        dialogRef.componentInstance.buttons = buttons;
        dialogRef.config.disableClose = disableClose;

        return dialogRef.afterClosed();
    }
}