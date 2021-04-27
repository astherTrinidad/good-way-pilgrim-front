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
  color: ${colors.darkGrey};
`;
/* COLUMN LEFT */

export const ColumnImg = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export const RowLogros = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 4rem;
`;

export const Img = styled.img`
  width: 80%;
  height: auto;
`;

export const Text = styled.p`
  font-weight: 300;
  color: ${colors.darkGrey};
  line-height: 2;

  &:first-of-type,
  &:last-of-type {
    margin-top: 2rem;
  }
`;

export const Logro = styled.div`
  height: 100px;
  width: 100px;
  background-color: ${colors.lightGrey};
  border-radius: 50%;
  margin: 0.5rem;
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

  @media screen and (max-width: 960px) {
    margin-top: 0;
  }
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

export const RowName = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
