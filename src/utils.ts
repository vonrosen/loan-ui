import { LoanDetails, FormattedLoanDetail } from './model/LoanDetails';

const debounce = (delay : number, fn : Function) => {
    let timerId : number | null;
    return (...args: any) => {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = window.setTimeout(() => {
            fn(...args);
            timerId = null;
        }, delay);
    }
}

const formatLoanDetails = (loanDetails: LoanDetails) : FormattedLoanDetail [] => {
    return Object.keys(loanDetails).map((term: string) : FormattedLoanDetail => {
        return {
            term,
            loanDetails: loanDetails[term]
        }
    })
    .sort((obj1, obj2) => {
        if (parseInt(obj1.term) < parseInt(obj2.term)) {
            return 1;
        }
        else if (parseInt(obj1.term) > parseInt(obj2.term)) {
            return -1;
        }
        return 0;
    });
}

const formatLoanDataForChart = (loanDetails) => {
    if (loanDetails) {
        return loanDetails.map(({ rateTimesHundred, loanAmountCents }) => {
            return {
                Rate: `${(rateTimesHundred / 100)} %`,
                LoanAmount: (loanAmountCents / 100)
            }
        });
    }
}

const formatUserHistory = (userHistory) => {
    if (userHistory) {
        return userHistory.reduce((acc, curr) => {
            if (acc.filter((history) =>
                history.maxPaymentAmount === curr.maxPaymentAmount).length === 0) {
                acc.push(curr);
            }
            return acc
        }, [])
    }
}

export { debounce, formatLoanDetails, formatLoanDataForChart, formatUserHistory };