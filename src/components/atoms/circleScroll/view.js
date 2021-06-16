import React from "react";
import { ComponentStyled } from "./styled";
import arrowToTop from "../../../assets/images/arrowToTop.png";

const CircleScroll = ({ tabIndex = 0, onClick }) => {
  return (
    <ComponentStyled onClick={onClick}>
      <img src={arrowToTop} alt="subir arriba" tabIndex={tabIndex} />
    </ComponentStyled>
  );
};

export default CircleScroll;
