import styled from 'styled-components';
import colors from '../../../assets/colors';

export const Illustration = styled.img`
  background-size: cover;
  width: auto;
  height: 200px;
  margin: 2rem auto;
  display: block;
`;

export const ButtonDelete = styled.button`
  width: 50%;
  border-radius: 8px;
  background-color: ${colors.red};
  color: ${colors.white};
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  transition: all 0.3s ease-out;

  &:hover {
    background: ${colors.redDark};
    color: ${colors.white};
    cursor: pointer;
    box-shadow: inset 0px 11px 8px -10px ${colors.black};
  }
  @media screen and (max-width: 960px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin: 1rem;
  }
`;

export const ButtonSave = styled.button`
  background-color: ${colors.turquoise};
  border-radius: 8px;
  color: ${colors.white};
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  padding: 1rem 1.5rem;
  transition: all 0.3s ease-out;
  margin: 1rem;

  width: 50%;

  &:hover {
    background: ${colors.turquoiseDark};
    color: ${colors.white};
    cursor: pointer;
    box-shadow: inset 0px 11px 8px -10px ${colors.black};
  }

  @media screen and (max-width: 960px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin: 1rem;
  }
`;
