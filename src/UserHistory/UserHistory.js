import React from 'react';
import { HistoryDiv, HistoryTableStyle } from './UserHistoryStyle';

class UserHistory extends React.Component {
    render() {
        const { userRequests } = this.props;
        if (userRequests) {
            return (
                <HistoryDiv userRequests={userRequests}>
                    <HistoryTableStyle/>
                    <table>
                        <tbody>
                            {userRequests.map((userRequest) => (
                                <tr key={userRequest.created}>
                                    <td>                                    
                                        {userRequest.maxPaymentAmount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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