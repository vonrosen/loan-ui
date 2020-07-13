export interface LoanDetail {
    loanAmountCents: number,
    termMonths: number,
    rateTimesHundred: number
}

export interface LoanDetails {
    [index: string]: LoanDetail[]
}

export interface FormattedLoanDetail {
    term: string,
    loanDetails: LoanDetail[]
}