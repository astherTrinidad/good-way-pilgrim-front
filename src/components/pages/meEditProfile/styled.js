import styled from 'styled-components';
import colors from '../../../assets/colors';

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
  color: ${colors.darkGrey};
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

/*export const PhotoProfile = styled.div`
  height: 150px;
  width: 150px;
  background: url(${profilePhoto});
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  margin-top: -3.5rem;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;
`;*/

export const PhotoProfile = styled.img`
  height: 150px;
  width: 150px;
  position: relative;
  margin-top: -3.5rem;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;
  border: 5px solid ${colors.mustard};
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

export const RowName = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RowButton = styled.div`
  display: flex;
  flex-direction: row;
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
  margin: 1rem;
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
/* FINISH COLUMN RIGHT */
