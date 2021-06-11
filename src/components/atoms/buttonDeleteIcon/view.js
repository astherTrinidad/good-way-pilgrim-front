import React from "react";
import PropTypes from "prop-types";
import { Container } from "./styled";

const ButtonDeleteIcon = ({ id, label, onClick, type, value }) => (
  <Container id={id} type={type} onClick={onClick} value={value}>
    {label}
  </Container>
);

ButtonDeleteIcon.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  value: PropTypes.string,
};

ButtonDeleteIcon.defaultProps = {
  id: "",
  label: "",
  onClick: () => {},
  type: "submit",
  value: "",
};

export default ButtonDeleteIcon;
