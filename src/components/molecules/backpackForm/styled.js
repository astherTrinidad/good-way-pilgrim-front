import styled from "styled-components";
import colors from "../../../assets/colors";

export const TitleList = styled.h3`
  color: ${colors.turquoise};
  font-size: 2rem;
  margin: 3rem 0 2rem 0;
`;

export const Form = styled.form`
  margin-bottom: 1rem;
`;

export const Icons = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 1.75rem;

  .delete-icon {
    color: ${colors.white};
  }

  .edit-icon {
    color: ${colors.white};
    margin-right: 5px;
  }
`;

export const Input = styled.input`
  background: ${colors.white};
  border: 1px solid ${colors.turquoise};
  border-radius: 10px 0 0 10px;
  color: ${colors.darkGrey};
  outline: none;
  padding: 1rem;
  width: 70%;

  &::placeholder {
    color: ${colors.mediumGrey};
  }
`;

export const InputUpdate = styled.input`
  background: transparent;
  border: 1px solid ${colors.mustard};
  border-radius: 10px 0 0 10px;
  color: ${colors.darkGrey};
  outline: none;
  padding: 1rem;
  width: 70%;

  &::placeholder {
    color: ${colors.mediumGrey};
  }
`;

export const ButtonList = styled.button`
  background-color: ${colors.turquoise};
  border-radius: 0 10px 10px 0;
  color: ${colors.white};
  cursor: pointer;
  font-size: 1rem;
  padding: 1.125rem;
  text-transform: capitalize;
  width: 100px;

  &:hover {
    background: ${colors.turquoiseDark};
    box-shadow: inset 0px 11px 8px -10px ${colors.black};
    color: ${colors.white};
    cursor: pointer;
  }
`;

export const ButtonListUpdate = styled.button`
  background-color: ${colors.mustard};
  border-radius: 0 10px 10px 0;
  color: ${colors.white};
  cursor: pointer;
  font-size: 1rem;
  padding: 1.125rem;
  text-transform: capitalize;
  width: 100px;

  &:hover {
    background: ${colors.mustardDark};
    box-shadow: inset 0px 11px 8px -10px ${colors.black};
    color: ${colors.white};
    cursor: pointer;
  }
`;

export const Container = styled.div`
  align-items: center;
  border-radius: 5px;
  color: ${colors.white};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0.25rem auto;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  position: relative;
  width: 80%;

  .stored {
    opacity: 0.5;
    text-decoration: line-through;
  }

  &:nth-child(3n + 1) {
    background: linear-gradient(
      90deg,
      ${colors.turquoise} 0%,
      ${colors.turquoiseDark} 100%
    );
  }

  &:nth-child(3n + 2) {
    background: linear-gradient(
      90deg,
      ${colors.pistach} 0%,
      ${colors.pistachDark} 100%
    );
  }

  &:nth-child(3n + 3) {
    background: linear-gradient(
      90deg,
      ${colors.mustard} 0%,
      ${colors.mustardDark} 100%
    );
  }
`;
