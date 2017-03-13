import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { FuelTrend } from '../type/fuel-trend';

@Injectable()
export class FuelTrendService {
    private fuelUrl = 'api/fuel';  // URL to web api
    private headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });

    constructor(private http: Http) { }

    getFuelTrendMock(): Promise<FuelTrend[]> {
        console.info('get fuel trend');

        return this.http.get(this.fuelUrl)
            .toPromise()
            .then(response => {
                console.info('promise');
                console.info(response);
                console.info(response.json());
                console.info(response.json().data);

                return response.json().data as FuelTrend[]
            })
            .catch(this.handleError);
    }

    getFuelTrend(): Promise<FuelTrend[]> {
        //console.info('get fuel trend');

        let url = 'http://192.168.0.80/fuel/data/trend.php';

        return this.http.get(url)
            .toPromise()
            .then(response => {
                //console.info('promise');
                //console.info(response);
                //console.info(response.json());
                //console.info(response.json().data);

                return response.json().data as FuelTrend[]
            })
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only

        return Promise.reject(error.message || error);
    }
}