import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        let heroes = [
            { id: 11, name: 'Mr. Nice', power: 'p11' },
            { id: 12, name: 'Narco', power: 'p12' },
            { id: 13, name: 'Bombasto', power: 'p13' },
            { id: 14, name: 'Celeritas', power: 'p14' },
            { id: 15, name: 'Magneta', power: 'p15' },
            { id: 16, name: 'RubberMan', power: 'p16' },
            { id: 17, name: 'Dynama', power: 'p17' },
            { id: 18, name: 'Dr IQ', power: 'p18' },
            { id: 19, name: 'Magma', power: 'p19' },
            { id: 20, name: 'Tornado', power: 'p20' }
        ];

        let fuel = {
            PriceAverage: 118.5,
            PriceMax: 139.9,
            PriceMin: 109.3,
            PriceYesterday: 118.6,
            PriceThreshold: 116.9,
            PriceTerminal: 115.98,
            Trend: -1,
            Suggest: 3,
            LastUpdated: "09 Mar 2017 18:59:02"
        };

        return {
            heroes,
            fuel
        };
    }
}