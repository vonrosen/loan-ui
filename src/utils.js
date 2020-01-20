const debounce = (delay, fn) => {
    let timerId;
    return (...args) => {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            fn(...args);
            timerId = null;
        }, delay);
    }
}

const formatLoanDetails = (loanDetails) => {
    return Object.keys(loanDetails).map((term) => {
        return {
            term,
            loanDetails: loanDetails[term]
        }
    }).sort((obj1, obj2) => {
        if (obj1.term < obj2.term) {
            return 1;
        }
        return 0;
    });
}

const formatLoanDataForChart = (loanDetails) => {
    if (loanDetails) {
        return loanDetails.map(({rateTimesHundred, loanAmountCents}) => {
            return {
                Rate: `${(rateTimesHundred / 100)} %`,
                LoanAmount: (loanAmountCents / 100)
            }
        });
    }
}

export { debounce, formatLoanDetails, formatLoanDataForChart };