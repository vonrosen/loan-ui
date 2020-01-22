import React from 'react';
import PaymentInput from '../PaymentInput/PaymentInput';
import UserHistory from '../UserHistory/UserHistory';
import { UserHistoryPaymentInputDiv } from './UserHistoryPaymentInputStyle';

class UserHistoryPaymentInput extends React.Component {
    render() {
        const { userRequests, ...paymentInputProps} = this.props;
        return (
            <UserHistoryPaymentInputDiv>
                <UserHistory userRequests={userRequests} />
                <PaymentInput {...paymentInputProps} />
            </UserHistoryPaymentInputDiv>
        );
    }    
}

export default UserHistoryPaymentInput;