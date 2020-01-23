import React from 'react';
import { HistoryDiv, HistoryTitleDiv } from './UserHistoryStyle';

class UserHistory extends React.Component {
    render() {
        const { userRequests } = this.props;
        if (userRequests) {
            return (
                <HistoryDiv userRequests={userRequests}>
                    <HistoryTitleDiv >Previous Queries</HistoryTitleDiv>
                        {userRequests.map((userRequest) => (
                            <div key={userRequest.maxPaymentAmount}>
                                {userRequest.maxPaymentAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}<br/>
                            </div>
                        ))}  
                </HistoryDiv>
            );
        }
        else {
            return (
                <HistoryDiv userRequests={userRequests} />
            );
        }
    }

}

export default UserHistory;