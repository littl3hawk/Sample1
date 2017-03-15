import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef } from '@angular/material';

import { DialogComponent } from '../component/dialog.component';
import { PdfCategory } from '../type/pdf-category';
import { PdfFile } from '../type/pdf-file';
import { PdfFolder } from '../type/pdf-folder';
import { PdfWrapper } from '../type/pdf-wrapper';
import { PdfService } from '../service/pdf.service';
import { DialogsService } from '../service/dialogs.service';


@Component({
    moduleId: module.id,
    selector: 'my-pdf',
    styleUrls: ['./pdf.component.css'],
    templateUrl: './pdf.component.html'
})

export class PdfComponent implements OnInit {
    contentFolder: string;

    files: PdfFile[];
    folders: PdfFolder[];
    categories: PdfCategory[];

    selectedFolder: PdfFolder;
    selectedFiles: PdfFile[];

    constructor(private pdfService: PdfService, private dialogsService: DialogsService /*, public dialog: MdDialog*/) { }

    getPdf(): void {
        // Sync
        //this.fuelDetail1 = this.heroService.getHeroes();

        // Async
        this.pdfService.getPdf().then(x => {
            let wrapper = x;

            if (wrapper) {
                this.files = x.files;
                this.folders = x.folders;
                this.categories = x.categories;
            }

            console.info('pdf async comp');
            console.info(this.files);
            console.info(this.folders);
            console.info(this.categories);
        });

        // Async with 2 second delay
        //this.heroService.getHeroesSlowly().then(heroes => this.heroes = heroes);    
    }

    ngOnInit() {
        this.getPdf();

        this.contentFolder = 'http://192.168.0.80/pdf/content';
    }

    onSelectFolder(folder: PdfFolder): void {
        this.selectedFolder = this.selectedFolder && this.selectedFolder.id == folder.id ? null : folder;
        this.updateSelectedFiles();
    }

    updateSelectedFiles(): void {
        this.selectedFiles = this.selectedFolder ? this.files.filter(x => x.folderId == this.selectedFolder.id) : null;
    }

    onSelectFile(file: PdfFile): void {
        let url = `${this.contentFolder}/${this.selectedFolder.name}/${file.name}.pdf`;

        console.info('select file:' + file.name);
        console.info(url);

        window.open(url, '_blank');
    }

    onSelectFavourite(file: PdfFile): void {
        console.info('select fav: ' + file.displayName);

        if (file.isFavourite) {
            console.info('currently is isFavourite');
        }
        else {
            console.info('currently not a Favourite');
        }

        file.isFavourite = !file.isFavourite;

        this.pdfService.setFavourite(file)
            .then(() => {
                //
            });
    }

    onSelectCategory(file: PdfFile): void {
        console.info('select category: ' + file.displayName);

        this.pdfService.setCategory(file)
            .then(() => {
                //
            });
    }

    onSelectRemove(file: PdfFile): void {
        /*let selectedOption: string;

        let dialogRef = this.dialog.open(DialogComponent);
        dialogRef.config.disableClose = false;
        dialogRef.componentInstance.title = 'Remove';
        dialogRef.componentInstance.message = `Are you sure you want to remove ${file.displayName}?`;

        dialogRef.afterClosed().subscribe(result => {
            selectedOption = result;
            console.info(selectedOption);
        });*/

        let result: any;

        this.dialogsService
            .confirm('Remove', `Are you sure you want to remove ${file.displayName}?`)
            .subscribe(res => {
                result = res;

                console.info(result);
            });

        console.info('select remove: ' + file.displayName);

        this.pdfService
            .delete(file)
            .then(() => {
                this.files = this.files.filter(x => x.id !== file.id);
                this.updateSelectedFiles();
            });
    }

    getCategoryName(categoryId: number): string {
        if (categoryId && categoryId > 0) {
            let category = this.categories.find(x => x.id == categoryId);

            if (category) {
                return category.name;
            }
        }

        return '';
    }
}