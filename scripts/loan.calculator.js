export class LoanCalculator {
    loanSlider = document.querySelector('#loan-slider');
    loanValue = document.querySelector('#loan-value');
    loanPeriod = document.querySelector('#loan-period');
    monthlyPayment = document.querySelector('#monthly-payment')
    maxValue = 30000;
    percentOfTheTotalValue = 0;
    interestRate = 0.9;
    constructor() {
        this.setListeners()
    }

    setListeners() {
        const showCalculation = () => {
            this.percentOfTheTotalValue = this.loanSlider.value;
            this.monthlyPayment.value = this.countPayment();
        };
        this.loanSlider.addEventListener('input', () => {
            this.percentOfTheTotalValue = this.loanSlider.value;
            this.loanValue.value = (this.maxValue * this.percentOfTheTotalValue) / 100;
            this.monthlyPayment.value = this.countPayment();
        })
        this.loanValue.addEventListener('input', showCalculation);
        this.loanPeriod.addEventListener('input', showCalculation);
    };

    countPayment() {
        const monthlyInterestRate = (this.interestRate / 12) + 1;
        const loanPeriod = +this.loanPeriod.value;
        let loanValue = +this.loanValue.value;
        let totalLoanValue = 0;
        for (let index = 0; index < loanPeriod; index++) {
            loanValue = loanValue * monthlyInterestRate;
            const monthlyPayment = loanValue / (loanPeriod - index);
            totalLoanValue += monthlyPayment;
            loanValue -= monthlyPayment;
        };
        return (totalLoanValue / loanPeriod).toFixed();
    };
}