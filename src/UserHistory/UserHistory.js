import React from 'react';
import { HistoryDiv } from './UserHistoryStyle';

class UserHistory extends React.Component {
    render() {
        const { userRequests } = this.props;
        if (userRequests) {
            return (
                <HistoryDiv userRequests={userRequests}>
                    <table>
                        <tbody>
                            {userRequests.map((userRequest) => (
                                <tr key={userRequest.created}>
                                    <td>
                                        {userRequest.maxPaymentAmount}
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