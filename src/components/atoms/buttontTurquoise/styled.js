import styled from 'styled-components';
import colors from '../../../assets/colors';

export const Container = styled.button`
  width: 25%;
  border-radius: 8px;
  background-color: ${colors.turquoise};
  color: ${colors.white};
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  margin: 0 0 1rem 0;
  padding: 1rem 1rem;
  transition: all 0.3s ease-out;

  &:hover {
    background: ${colors.turquoiseDark};
    color: ${colors.white};
    cursor: pointer;
    box-shadow: inset 0px 11px 8px -10px ${colors.black};
  }

  .MuiCircularProgress-root {
    color: ${colors.white};
    margin-left: 10px;
  }

  @media screen and (max-width: 960px) {
    display: block;
    margin: 1rem auto;
  }
`;
