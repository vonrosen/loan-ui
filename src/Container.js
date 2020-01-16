import React from 'react';
import PaymentInput from './PaymentInput/PaymentInput';
import LoanService from './service/LoanService';
import {debounce} from './util';

class Container extends React.Component {
    render() {
        return (
            <PaymentInput placeholder="$0.00" type="text" onChange={ 
                (e) => { 
                    this.getLoanDetails(e.target.value.replace("$", "").replace(",", ""))
                } }/>
        );
    }

    getLoanDetails = debounce(500, (maxPaymentAmount) => {
        console.log("max payment is", maxPaymentAmount);
        LoanService.getLoanDetails(maxPaymentAmount).then((response) => {
            console.log(response.data);
        });
    });
}

export default Container;