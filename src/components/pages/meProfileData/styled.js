import styled from 'styled-components';
import colors from '../../../assets/colors';
import bgHeaderMeProfileData from '../../../assets/images/bg-header-me-profileData.jpg';
import bgHeaderShowProfileMobile from '../../../assets/images/bgHeaderShowProfileMobile-min.jpg';
import concha from '../../../assets/images/ic_concha.png';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  justify-content: center;
  margin: 3rem auto;
  width: 50%;
  height: max-content;

  @media screen and (max-width: 578px) {
    width: 80%;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 3rem auto;
  width: 50%;
  height: max-content;
`;

export const RowLogros = styled.div`
  /* align-items: center; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 55%;
  height: max-content;
  margin: 4rem auto;
  @media screen and (max-width: 968px) {
    max-width: 80%;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Header = styled.header`
  background: url(${bgHeaderMeProfileData});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: centter;
  height: 500px;
  justify-content: center;
  margin-top: -120px;

  @media screen and (max-width: 768px) {
    background: url(${bgHeaderShowProfileMobile});
    background-repeat: no-repeat;
    background-size: cover;
    background-position-y: 60px;
    height: 300px;
  }
`;
export const ContainerPhoto = styled.div`
  margin-right: auto;
  margin-left: auto;
  height: 200px;
  width: 200px;
  margin-top: -85px;
  border: 4px solid ${colors.turquoise};
  border-radius: 50%;
  background-color: ${colors.white};
`;

export const PhotoProfile = styled.img`
  height: 200px;
  width: 200px;
  display: block;
  margin: auto;
  position: relative;
  margin-top: -85px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 50%;
  border: 5px solid ${colors.mustard};
`;

export const Container = styled.main`
  align-items: center;
  width: 100%;
`;

export const ContainerName = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const NameProfile = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${colors.darkGrey};
  padding: 1.5rem 0rem 0 0.5rem;
`;

export const SurnameProfile = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  font-size: 1.5rem;
  color: ${colors.darkGrey};
  padding: 1.5rem 0.5rem;
`;

export const Heading = styled.h2`
  color: ${colors.turquoise};
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 2em;
  font-weight: bold;
  line-height: 1.5;
  margin-right: auto;
  margin-left: auto;
  margin-top: 1rem;
  text-align: center;
  width: 100%;

  @media screen and (max-width: 960px) {
    font-size: 1.25em;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.25em;
    margin-bottom: 2rem;
    margin-top: 1rem;
    max-width: 100%;
  }
`;
export const Subtitle = styled.h3`
  color: ${colors.darkGrey};
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5em;
  font-weight: 300;
  line-height: 1.5;
  margin-right: auto;
  margin-left: auto;
  margin-top: 1rem;
  margin-bottom: 2rem;
  text-align: center;
  width: 80%;

  @media screen and (max-width: 960px) {
    font-size: 1em;
    margin: 0 0 1rem 0;
    width: 100%;
  }

  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  align-items: center;
  justify-content: center;
  max-width: max-content;
  height: max-content;
  text-align: center;
  margin: auto auto;
  @media screen and (max-width: 768px) {
    margin: auto auto;
    width: 100%;
  }
`;

export const TextNumber = styled.p`
  color: ${colors.darkGrey};
  font-size: 4rem;
  font-weight: 800;

  @media screen and (max-width: 578px) {
    font-size: 2rem;
  }
`;

export const TextType = styled.p`
  color: ${colors.darkGrey};
  font-size: 2rem;
  font-weight: 300;
  width: max-content;
  @media screen and (max-width: 578px) {
    font-size: 1rem;
  }
`;

export const ConchaIcon = styled.div`
  display: block;
  background-image: url(${concha});
  background-size: cover;
  background-repeat: no-repeat;
  height: 30px;
  width: 30px;
  margin: 0.5rem auto;
  background-color: ${colors.mustard};
`;

export const ConchaIconContainer = styled.div`
  border-radius: 50%;
  display: block;
  height: 50px;
  width: 50px;
  position: absolute;
  background-color: ${colors.mustard};
  margin-top: -100px;
  margin-left: 50px;
  @media screen and (max-width: 578px) {
    margin-left: 0;
  }
`;

export const Line = styled.hr`
  border: 2px solid ${colors.mustard};
  width: 150px;
  transform: rotate(90deg);
  position: absolute;
  margin: 3rem 0 0 50px;
  z-index: -25;
  @media screen and (max-width: 578px) {
    margin: 3rem 0 0 0;
  }
`;
