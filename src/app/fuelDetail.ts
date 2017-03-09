export class FuelDetail {
  constructor(
    public priceAverage: number,
    public priceMax: number,
    public priceMin: number,
    public priceYesterday: number,
    public priceThreshold: number,
    public priceTerminal: number,
    public trend: number,
    public suggest: number,
    public lastUpdated: string
  ) { }
}


/*
"PriceAverage": 118.5,
"PriceMax": 139.9,
"PriceMin": 109.3,
"PriceYesterday": 118.6,
"PriceThreshold": 116.9,
"PriceTerminal": 115.98,
"Trend": -1,
"Suggest": 3,
"LastUpdated": "09 Mar 2017 18:59:02"
*/