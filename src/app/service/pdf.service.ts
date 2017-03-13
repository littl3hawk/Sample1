import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { PdfCategory } from '../type/pdf-category';
import { PdfFile } from '../type/pdf-file';
import { PdfFolder } from '../type/pdf-folder';
import { PdfWrapper } from '../type/pdf-wrapper';

@Injectable()
export class PdfService {
    private fuelUrl = 'api/fuel';  // URL to web api
    private headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });

    constructor(private http: Http) { }

    getFuelTrendMock(): Promise<PdfWrapper> {
        console.info('get fuel trend');

        return this.http.get(this.fuelUrl)
            .toPromise()
            .then(response => {
                console.info('promise');
                console.info(response);
                console.info(response.json());
                console.info(response.json().data);

                return response.json().data as PdfWrapper
            })
            .catch(this.handleError);
    }

    getPdf(): Promise<PdfWrapper> {
        let url = 'http://192.168.0.80/pdf/data/list2.php';

        return this.http.get(url)
            .toPromise()
            .then(response => {
                //console.info('promise');
                //console.info(response);
                //console.info(response.json());
                //console.info(response.json().data);

                let data = response.json();
                let files = data.files;
                let folders = data.folders;
                let categories = data.categories;

                //console.info('source data');
                //console.info(data);

                //console.info('folders');
                //console.info(folders);
                //console.info('categories');
                //console.info(categories);

                //return response.json().data as PdfFolder[]
                return new PdfWrapper(
                    files as PdfFile[],
                    folders as PdfFolder[],
                    categories as PdfCategory[]
                );
            })
            .catch(this.handleError);
    }

    setFavourite(file: PdfFile): Promise<PdfFile> {
        return Promise.resolve(file);

        /*return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);*/
    }

    setCategory(file: PdfFile): Promise<PdfFile> {
        return Promise.resolve(file);

        /*return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);*/
    }

    delete(file: PdfFile): Promise<void> {
        return Promise.resolve(null);

        /*return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);*/
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only

        return Promise.reject(error.message || error);
    }
}