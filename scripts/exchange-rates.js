export class ExchangeRates {
    euroValue = document.querySelector('#euro');
    dollarValue = document.querySelector('#dollar');
    poundValue = document.querySelector('#pound');
    rubleValue = document.querySelector('#ruble');
    _API = 'https://api.nbp.pl/api/exchangerates/tables/A?format=json'
    constructor() {
        this.getData();
    }
    getData() {
        fetch(this._API)
            .then(response => response.json())
            .then(data => this.data = data)
            .then(() => this.showData());
    }
    showData() {
        const rates = this.data[0].rates;
        const getCurrency = code => (rates.filter(currency => currency.code == code)[0].mid).toFixed(2);
        const euro = getCurrency('EUR'), dollar = getCurrency('USD'), pound = getCurrency('GBP'), ruble = getCurrency('RUB');
        this.euroValue.textContent = euro;
        this.dollarValue.textContent = dollar;
        this.poundValue.textContent = pound;
        this.rubleValue.textContent = ruble;
    }
}