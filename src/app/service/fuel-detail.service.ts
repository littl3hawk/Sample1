import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { FuelDetail } from '../type/fuel-detail';

@Injectable()
export class FuelDetailService {
    private fuelUrl = 'api/fuel';  // URL to web api
    private headers = new Headers({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    });

    constructor(private http: Http) { }

    getFuelDetailMock(): Promise<FuelDetail> {
        console.info('get fuel detail');

        return this.http.get(this.fuelUrl)
            .toPromise()
            .then(response => {
                console.info('promise');
                console.info(response);
                console.info(response.json());
                console.info(response.json().data);

                return response.json().data as FuelDetail
            })
            .catch(this.handleError);
    }

    getFuelDetail(): Promise<FuelDetail> {
        //console.info('get fuel detail');

        let url = 'http://192.168.0.80/fuel/data/summary.php';

        return this.http.get(url)
            .toPromise()
            .then(response => {
                //console.info('promise');
                //console.info(response);
                //console.info(response.json());
                //console.info(response.json().data);

                return response.json().data as FuelDetail
            })
            .catch(this.handleError);
    }

    /*getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }*/

    /*getHeroes(): Promise<Hero[]> {
        console.info('get heroes');

        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response => response.json().data as Hero[])
            .catch(this.handleError);
    }*/

    /*getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }*/

    /*getHero(id: number): Promise<Hero> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }*/

    /*getHero(id: number): Promise<Hero> {
        const url = `${this.heroesUrl}/${id}`;

        console.info('getHero: ' + url);

        return this.http.get(url)
            .toPromise()
            .then(response => response.json().data as Hero)
            .catch(this.handleError);
    }*/

    /*update(hero: Hero): Promise<Hero> {
        const url = `${this.heroesUrl}/${hero.id}`;

        return this.http
            .put(url, JSON.stringify(hero), { headers: this.headers })
            .toPromise()
            .then(() => hero)
            .catch(this.handleError);
    }*/

    /*create(name: string): Promise<Hero> {
        return this.http
            .post(this.heroesUrl, JSON.stringify({ name: name }), { headers: this.headers })
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
    }*/

    /*delete(id: number): Promise<void> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }*/

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only

        return Promise.reject(error.message || error);
    }
}