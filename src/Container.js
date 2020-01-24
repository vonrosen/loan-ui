import React from 'react';
import Cookies from 'cookies-js';
import LoanDetails from './LoanDetails/LoanDetails';
import UserHistoryPaymentInput from './UserHistoryPaymentInput/UserHistoryPaymentInput';
import loanService from './service/LoanService';
import userService from './service/UserService';
import userRequestLogService from './service/UserRequestLogService';
import userHistoryService from './service/UserHistoryService';
import { debounce, formatLoanDetails, formatUserHistory } from './utils';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loanDetails: [{}, {}],
            userRequests: []
        };
    }

    componentDidMount() {
        let userId = Cookies.get("userId");
        if (userId) {
            userHistoryService.getUserHistory(userId).then((response) => {
                this.setState({
                    loanDetails: this.state.loanDetails,
                    userRequests: formatUserHistory(response.data.slice(0, 5))
                })
            }).catch((e) => {
                this.setState({
                    loanDetails: [{}, {}],
                    userRequests: []
                })
            })
        }
    }

    render() {
        const { loanDetails, maxPaymentAmount, userRequests } = this.state;
        return (
            <div>
                <div>
                    <UserHistoryPaymentInput userRequests={userRequests} placeholder="$0.00" type="text" onChange={
                        (e) => {
                            this.getUserAndLoanDetails(e.target.value.replace("$", "").replace(",", ""))
                        }}/>
                </div>
                <div>
                    <LoanDetails key={maxPaymentAmount + "_1"}
                        term={loanDetails[0].term} loanDetails={loanDetails[0].loanDetails} />
                    <LoanDetails key={maxPaymentAmount + "_2"}
                        term={loanDetails[1].term} loanDetails={loanDetails[1].loanDetails} />
                </div>
            </div>
        );
    }

    createUserAndGetLoanDetails = (maxPaymentAmount) => {
        userService.createUser().then((response) => {
            if (response.data.id) {
                const userId = response.data.id;
                Cookies.set("userId", userId, { expires: Infinity });
                this.getLoanDetails({ userId, maxPaymentAmount });
            }
        });
    }

    getUserAndLoanDetails = debounce(500, (maxPaymentAmount) => {
        let userId = Cookies.get("userId");
        if (!userId) {
            this.createUserAndGetLoanDetails(maxPaymentAmount);
        }
        else {
            userService.getUser(userId).then((response) => {
                if (response.status === 200) {
                    this.getLoanDetails({ userId, maxPaymentAmount });
                }
            }).catch((e) => {
                if (e.response.status === 404) {
                    this.createUserAndGetLoanDetails(maxPaymentAmount);
                }
            })
        }
    });

    getLoanDetails = ({ userId, maxPaymentAmount }) => {
        let promises = [];
        promises.push(loanService.getLoanDetails(maxPaymentAmount));
        promises.push(userRequestLogService.createUserRequestLog({ userId, maxPaymentAmount }))
        Promise.all(promises).then((results) => (
            results.map((result) => {
                if (result.config.url.startsWith('/loan-values')) {
                    console.log("raw", result.data)
                    console.log("format", formatLoanDetails(result.data))
                    this.setState({
                        userRequests: this.state.userRequests,
                        maxPaymentAmount,
                        loanDetails: formatLoanDetails(result.data)
                    });
                }
            })
        )).catch((e) => {
            this.setState({
                userRequests: this.state.userRequests,
                maxPaymentAmount,
                loanDetails: [{}, {}]
            });
        })
    }
}

export default Container;