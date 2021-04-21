import React from 'react'
import PropTypes from 'prop-types'
import CircularProgress from '@material-ui/core/CircularProgress'

import { Container } from './styled'

const Button = ({ onClick, label, type, isFetching }) => (
    <Container type={type} onClick={onClick}>
      {label}
      {isFetching && <CircularProgress size={16} />}
    </Container>
  )

Button.propTypes = {
    onClick: PropTypes.func,
    label: PropTypes.string,
    type: PropTypes.string,
    isFetching: PropTypes.bool,
}

Button.defaultProps = {
    onClick: () => {},
    label: '',
    type: 'submit',
    isFetching: false,
}

export default Button