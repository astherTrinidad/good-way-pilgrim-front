import styled from 'styled-components';

export const ComponentStyled = styled.div`
  height: 25px;
  width: 25px;
  position:fixed;
  margin-left: 1200px;
  margin-top: 550px;

  @media screen and (max-width: 968px){
    margin-left: 550px;
  margin-top: 550px;
  }
  
  @media screen and (max-width: 578px){
    margin-left: 300px;
  margin-top: 550px;
  }
`;
