import React from 'react'
import PropTypes from 'prop-types'
import Styles from './styled'

const FormHeader = ({ logo, title, info }) => (
  <Styles>
    <img className='logo' src={logo} alt='React' />
    {/* <h1>{title}</h1>
    <h2>{info}</h2> */}
  </Styles>
)

FormHeader.propTypes = {
  logo: PropTypes.string,
  // title: PropTypes.string,
  // info: PropTypes.string,
}

FormHeader.defaultProps = {
  logo: null,
  // title: '',
  // info: '',
}

export default FormHeader
