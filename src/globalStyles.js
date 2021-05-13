import styled, { createGlobalStyle } from 'styled-components';
import colors from './assets/colors';

const GlobalStyle = createGlobalStyle`

    * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const Button = styled.button`
  color: ${colors.white};
  border-radius: 4px;
  background: ${({ primary }) => (primary ? '#00B7B5' : '#ffc200')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '12px 64px' : '10px 20px')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: 1px solid ${colors.white};
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: ${colors.white};
    background: ${({ primary }) => (primary ? '#ffc200' : '#00B7B5')};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    background: ${({ primary }) => (primary ? '#00B7B5' : '#ffc200')};

    &:hover {
      background: ${({ primary }) => (primary ? '#ffc200' : '#00B7B5')};
    }
  }
`;

export default GlobalStyle;
