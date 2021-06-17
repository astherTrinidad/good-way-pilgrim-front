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
  top: -14rem;
  position: relative;
  left: -4.5rem;
  width: 45px;
  transition: all 0.3s ease-out;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.red};
    border: 3px solid ${colors.red};
    transform: rotate(180deg);
  }

  @media screen and (max-width: 768px) {
    top: -15rem;
    left: -4.5rem;
  }

  @media screen and (max-width: 578px) {
    top: -28rem;
    left: 7rem;
  }
`;
