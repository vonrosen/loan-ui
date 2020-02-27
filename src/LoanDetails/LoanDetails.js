import React from 'react';
import { StyledDiv } from './LoanDetailsStyle';
import LoanDetailsBarChartLabel from './LoanDetailsBarChartLabel';
import { Label, BarChart, Bar, XAxis, YAxis } from 'recharts';
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
                <BarChart margin={{ top: 0, right: 30, bottom: 0, left: 30 }} width={1800} height={350} data={formattedData}>
                    <XAxis dataKey="Rate" tick={{ fontSize: 20 }} />
                    <YAxis padding={{ top: 40 }} dataKey="LoanAmount" tick={{ fontSize: 14 }} type="number" domain={[0, maxLoanValue]} tickFormatter={
                        (v) => ( v.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).split(".")[0] )}>
                        <Label value="Loan Amount" position="insideTopLeft" fill="white" fontSize={24} />
                    </YAxis>
                    <Bar isAnimationActive={false} dataKey="LoanAmount" fill="white" barSize={30} barGap={200}
                        label={<LoanDetailsBarChartLabel fontSize="14" fill="white" position="top" />}/>
                </BarChart>
            </StyledDiv>
        );
    }

}

export default LoanDetails;