import styled from 'styled-components'
import colors from '../../../assets/colors'

export const Container = styled.button`
  align-items: center;
  background-color: ${colors.primary};
  border-radius: 8px;
  box-shadow: 
  0px 0px 5px 0px ${colors.black}; 
  color: ${colors.white};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  justify-content: center;
  line-height: 10px;
  font-family: 'Poppins', sans-serif;
  min-width: 140px;
  margin: 10px 0;
  padding: 15px 20px;

  &:hover {
    background: ${colors.secondary};
    color: ${colors.white};
    cursor: pointer;
    box-shadow: 
    inset 0px 11px 8px -10px ${colors.black};
    }

  .MuiCircularProgress-root {
    color: ${colors.white};
    margin-left: 10px;
  }
`