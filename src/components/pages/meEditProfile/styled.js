import styled from 'styled-components';
import colors from '../../../assets/colors';
import profilePhoto from '../../../assets/images/photo-profile-generic.png';

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 3rem auto;
  width: 80%;
  height: max-content;
`;
export const Section = styled.h1`
  font-size: 1.5em;
  margin-bottom: 2rem;
`;
/* COLUMN LEFT */

export const ColumnImg = styled.div`
  width: 50%;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 80%;
  height: auto;
`;
/* FINISH COLUMN LEFT */

/* COLUMN RIGHT */

export const ColumnText = styled.div`
  width: 50%;
  height: max-content;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-top: 3rem;
  }
`;

export const PhotoProfile = styled.div`
  height: 150px;
  width: 150px;
  background: url(${profilePhoto});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-top: -2.5rem;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;
`;

export const ContainerName = styled.div`
  width: max-content;
  height: max-content;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
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

export const FormEdit = styled.div`
  margin: 0 auto;
  display: block;
  width: 100%;
`;

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
  margin-right: 3.25rem;

  &:hover {
    background: ${colors.mustard};
    color: ${colors.white};
    cursor: pointer;
    box-shadow: inset 0px 11px 8px -10px ${colors.black};
  }

  @media screen and (max-width: 960px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

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
  @media screen and (max-width: 960px) {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;
/* FINISH COLUMN RIGHT */
