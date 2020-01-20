import React from 'react';

class LoanDetailsBarChartLabel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { x, y, fill, position, value } = this.props;
        return <text
            x={x}
            y={y}
            dx={10}
            dy={-8}
            fontSize='14'
            fill={fill}
            textAnchor="middle"
            position={position}>{value.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</text>
    }
}

export default LoanDetailsBarChartLabel;