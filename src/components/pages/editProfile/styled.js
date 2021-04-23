import styled from 'styled-components';
import colors from '../../../assets/colors';
import profilePhoto from '../../../assets/images/photo-profile-generic.png';

export const PhotoProfile = styled.div`
  height: 150px;
  width: 150px;
  background: url(${profilePhoto});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-top: 3rem;
  margin-right:24%;
  margin-left: auto;
  border-radius: 50%;

  @media screen and (max-width:960px){
    display: block;
    margin-right:auto;
  }
`;

export const ContainerName = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: row;
  margin-left: auto;
  margin-right:20%;
`;

export const NameProfile = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${colors.darkGrey};
  padding-top: 1em;
`;

export const SurnameProfile = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${colors.darkGrey};
  padding: 1.5rem 0.5rem;
`;

export const Styles = styled.div`  
align-items: center;
display: flex;
flex-direction: column;
height: 100vh;
justify-content: center;
padding: 60px 0;

    form {
        max-width: 300px;
        margin: 20px;
        text-align: center;
        width: 100%;
    }
`

export const FormEdit = styled.div`
position: absolute;
  width: 450px;
  height: 100vh;
  margin-top:5rem;
  margin-left:-7rem;
    opacity: 1;

@media screen and (max-width: 960px) {
  display: block;
  width: 65%;
  margin-left: 0;
}
`

export const ButtonSave = styled.button`
  background-color: ${colors.turquoise};
  color: ${colors.white};
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  margin-left: auto;
  margin-right: 1rem;
  padding: 1rem 4rem;
  transition: all 0.3s ease-out;
  margin-right:3.25rem;

  &:hover {
    background: ${colors.mustard};
    color: ${colors.white};
    cursor: pointer;
    box-shadow: inset 0px 11px 8px -10px ${colors.black};
  }

  @media screen and (max-width:960px) {
    display:block;
    margin-left: auto;
  margin-right: auto;
  }

`


export const ButtonDelete = styled.button`
  background-color: ${colors.red};
  color: ${colors.white};
  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  justify-content: center;
  font-family: 'Poppins', sans-serif;
  margin-left: auto;
  margin-right: auto;
  padding: 1rem 1.5rem;
  transition: all 0.3s ease-out;


  &:hover {
    background: ${colors.turquoise};
    color: ${colors.white};
    cursor: pointer;
    box-shadow: inset 0px 11px 8px -10px ${colors.black};
  }
  @media screen and (max-width:960px) {
    display:block;
    margin-left: auto;
  margin-right: auto;
  }
`