import styled from "styled-components";
import colors from "../../../assets/colors";

export const Container = styled.button`
  background-color: ${colors.red};
  border-radius: 50%;
  color: ${colors.white};
  cursor: pointer;
  font-size: 2rem;
  font-weight: 500;
  height: 50px;
  top: -230px;
  position: relative;
  left: -75px;
  width: 50px;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.red};
    border: 3px solid ${colors.red};
  }

  @media screen and (max-width: 578px) {
    top: -525px;
    left: 175px;
  }
`;
