import React from 'react';
import { StyledDiv } from './LoanDetailsStyle';
import LoanDetailsBarChartLabel from './LoanDetailsBarChartLabel';
import { BarChart, Bar, XAxis, YAxis } from 'recharts';
import { formatLoanDataForChart } from '../utils';

class LoanDetails extends React.Component {
    render() {
        const { term, loanDetails } = this.props;
        const formattedData = formatLoanDataForChart(loanDetails);
        let maxLoanValue;
        if (formattedData) {
            const { LoanAmount } = formattedData.reduce((acc, curr) => {
                return { LoanAmount: Math.max(acc.LoanAmount, curr.LoanAmount) }
            });
            maxLoanValue = Math.ceil(LoanAmount + (LoanAmount * .10));
        }

        return (
            <StyledDiv term={term}>
                <h1>
                    {term} year fixed
                </h1>
                <BarChart margin={{ top: 0, right: 20, bottom: 0, left: 20 }} width={1500} height={300} data={formattedData}>
                    <XAxis dataKey="Rate" tick={{ fontSize: 20 }} />
                    <YAxis dataKey="LoanAmount" tick={{ fontSize: 16 }} type="number" domain={[0, maxLoanValue]} tickFormatter={
                        (v) => v.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).split(".")[0]} />
                    <Bar dataKey="LoanAmount" fill="white" barSize={30}
                        label={<LoanDetailsBarChartLabel fontSize="14" fill="white" position="top" />} />
                </BarChart>
            </StyledDiv>
        );
    }

}

export default LoanDetails;