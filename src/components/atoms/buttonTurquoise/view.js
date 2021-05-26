import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Container } from './styled';

const ButtonTurquoise = ({ id, isFetching, label, onClick, type, value }) => (
  <Container id={id} type={type} onClick={onClick} value={value}>
    {label}
    {isFetching && <CircularProgress size={16} />}
  </Container>
);

ButtonTurquoise.propTypes = {
  id: PropTypes.string,
  isFetching: PropTypes.bool,
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

ButtonTurquoise.defaultProps = {
  id: '',
  isFetching: false,
  label: '',
  onClick: () => {},
  type: 'submit',
  value: '',
};

export default ButtonTurquoise;
