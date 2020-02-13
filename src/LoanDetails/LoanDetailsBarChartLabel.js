import React from 'react';

class LoanDetailsBarChartLabel extends React.Component {
    render() {
        const { x, y, fill, position, fontSize, value } = this.props;
        return <text
            x={x}
            y={y}
            dx={10}
            dy={-8}
            fontSize={fontSize}
            fill={fill}
            textAnchor="middle"
            position={position}>{value.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).split(".")[0]}</text>
    }
}

export default LoanDetailsBarChartLabel;