import React from 'react';
import PropTypes from 'prop-types';
import Styles from './styled';

const FormHeader = ({ logo, title, info }) => (
  <Styles>
    <img className="logo" src={logo} alt="Logo G" />
  </Styles>
);

FormHeader.propTypes = {
  logo: PropTypes.string,
  // title: PropTypes.string,
  // info: PropTypes.string,
};

FormHeader.defaultProps = {
  logo: null,
  // title: '',
  // info: '',
};

export default FormHeader;
