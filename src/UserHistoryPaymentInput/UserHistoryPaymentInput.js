import React from 'react';
import PaymentInput from '../PaymentInput/PaymentInput';
import UserHistory from '../UserHistory/UserHistory';
import { UserHistoryPaymentInputDiv, UserHistoryPaymentTextDiv } from './UserHistoryPaymentInputStyle';

class UserHistoryPaymentInput extends React.Component {
    render() {
        const { userRequests, ...paymentInputProps} = this.props;
        return (
            <UserHistoryPaymentInputDiv>
                <UserHistory userRequests={userRequests} />
                <UserHistoryPaymentTextDiv>
                    <p>Monthly payment:  </p>
                </UserHistoryPaymentTextDiv>                
                <PaymentInput {...paymentInputProps} />
            </UserHistoryPaymentInputDiv>
        );
    }    
}

export default UserHistoryPaymentInput;