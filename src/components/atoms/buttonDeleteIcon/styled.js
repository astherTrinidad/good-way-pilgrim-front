import styled from "styled-components";
import colors from "../../../assets/colors";

export const Container = styled.button`
  background-color: ${colors.red};
  border-radius: 50%;
  color: ${colors.white};
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 500;
  height: 45px;
  top: -230px;
  position: relative;
  left: -75px;
  width: 45px;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.red};
    border: 3px solid ${colors.red};
    transform: rotate(180deg);
  }

  @media screen and (max-width: 578px) {
    top: -530px;
    left: 175px;
  }
`;
