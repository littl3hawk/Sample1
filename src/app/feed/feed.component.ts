import { Component, OnInit } from '@angular/core';

import { DialogsService } from '../service/dialogs.service';
import { ConfirmDialogButton } from '../component/confirm-dialog.component';

@Component({
    moduleId: module.id,
    selector: 'my-feed',
    templateUrl: './feed.component.html'
})

export class FeedComponent implements OnInit {
    constructor(private dialogsService: DialogsService) { }

    ngOnInit() { }

    openDialog(): void {
        let result: any;

        this.dialogsService
            //.confirmCustom('Remove', `Are you sure you want to remove?`, true, [new ConfirmDialogButton('Yes', true), new ConfirmDialogButton('No', false)])
            .confirmYesNo('Remove', `Are you sure you want to remove? v3`, true)
            //.message('Title', 'Message', true, 'Done')
            .subscribe(res => {
                result = res;

                if (result === true) {
                    console.info('Result is true');
                }

                console.info(result);
            });
    }
}