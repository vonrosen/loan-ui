import React from 'react'
import PropTypes from 'prop-types'
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'

const defaultMaskOptions = {
  prefix: '$',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2, // how many digits allowed after the decimal
  integerLimit: 7, // limit length of integer numbers
  allowNegative: false,
  allowLeadingZeroes: false,
}

const PaymentInput = ({ maskOptions, ...inputProps }) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  })

  return <MaskedInput mask={currencyMask} {...inputProps} />
}

PaymentInput.defaultProps = {
  inputMode: 'numeric',
  maskOptions: {},
}

PaymentInput.propTypes = {
  inputmode: PropTypes.string,
  maskOptions: PropTypes.shape({
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    // eslint-disable-next-line react/no-typos
    includeThousandsSeparator: PropTypes.boolean,
    // eslint-disable-next-line react/no-typos
    thousandsSeparatorSymbol: PropTypes.string,
    // eslint-disable-next-line react/no-typos
    allowDecimal: PropTypes.boolean,
    decimalSymbol: PropTypes.string,
    decimalLimit: PropTypes.string,
    // eslint-disable-next-line react/no-typos
    requireDecimal: PropTypes.boolean,
    // eslint-disable-next-line react/no-typos
    allowNegative: PropTypes.boolean,
    // eslint-disable-next-line react/no-typos
    allowLeadingZeroes: PropTypes.boolean,
    integerLimit: PropTypes.number,
  }),
}

export default PaymentInput
