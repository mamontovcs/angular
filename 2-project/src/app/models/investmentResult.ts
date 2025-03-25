export class InvestmentResult {

    constructor(
        public year: number,
        public interest: number,
        public valueEndOfYear: number,
        public annualInvestment: number,
        public totalInterest: number,
        public totalAmountInvested: number
    ) {
        this.year = year;
        this.interest = interest;
        this.valueEndOfYear = valueEndOfYear;
        this.annualInvestment = annualInvestment;
        this.totalInterest = totalInterest;
        this.totalAmountInvested = totalAmountInvested;
    }

};