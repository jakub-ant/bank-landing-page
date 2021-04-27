import {InnerContainer } from './scripts/inner-container.js';
import {Header} from './scripts/header.js'
import {Download} from './scripts/download.js'
import {OfferOverview} from './scripts/offer-overview.js'
import { LoanCalculator} from './scripts/loan.calculator.js'
import {ExchangeRates} from './scripts/exchange-rates.js'
import {downloadHide} from './scripts/download-hide.js'

const innerContainer = new InnerContainer ();
const header = new Header();
const offerOverview = new OfferOverview();
const loanCalculator = new  LoanCalculator();
const exchangeRates = new ExchangeRates();
const download = new Download();
downloadHide.addObserver(innerContainer);
downloadHide.addObserver(header);
downloadHide.addObserver(download);
 