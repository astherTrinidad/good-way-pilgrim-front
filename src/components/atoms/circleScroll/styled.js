import styled from 'styled-components';

export const ComponentStyled = styled.div`
  height: 25px;
  width: 25px;
  position:fixed;
  margin-left: 82%;
  margin-top: 90%;

  @media screen and (max-width: 968px){
    margin-bottom: 100%;
  }
  
  @media screen and (max-width: 578px){
    margin-left: 75%;
    margin-bottom: 100%;
  }
`;
