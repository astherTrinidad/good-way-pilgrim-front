import React from 'react';
import {ComponentStyled} from './styled';
import arrowToTop from '../../../assets/images/arrowToTop.png'

const CircleScroll = ({ tabIndex={tabIndex}}) => {
  return (
    <ComponentStyled>
      <img src={arrowToTop} alt='subir arriba' tabIndex={tabIndex}/>
    </ComponentStyled>
  );
};

export default CircleScroll;
