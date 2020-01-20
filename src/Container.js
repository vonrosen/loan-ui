import React from 'react';
import PaymentInput from './PaymentInput/PaymentInput';
import LoanDetails from './LoanDetails/LoanDetails';
import loanService from './service/LoanService';
import { debounce, formatLoanDetails } from './utils';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loanDetails: [{}, {}]
        };
    }

    render() {
        const { loanDetails, maxPaymentAmount } = this.state;
        return (
            <div>
                <PaymentInput placeholder="$0.00" type="text" onChange={
                    (e) => {
                        this.getLoanDetails(e.target.value.replace("$", "").replace(",", ""))
                    }} />
                <LoanDetails key={maxPaymentAmount + "_1"} term={loanDetails[0].term} loanDetails={loanDetails[0].loanDetails} />
                <LoanDetails key={maxPaymentAmount + "_2"} term={loanDetails[1].term} loanDetails={loanDetails[1].loanDetails} />
            </div>
        );
    }

    getLoanDetails = debounce(500, (maxPaymentAmount) => {
        loanService.getLoanDetails(maxPaymentAmount).then((response) => {
            this.setState({
                maxPaymentAmount,
                loanDetails: formatLoanDetails(response.data)
            });
        });
    });
}

export default Container;