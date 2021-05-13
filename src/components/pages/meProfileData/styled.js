import styled from 'styled-components';
import colors from '../../../assets/colors';
import bgHeaderMeProfileData from '../../../assets/images/bg-header-me-profileData.jpg';
import bgHeaderShowProfileMobile from '../../../assets/images/bgHeaderShowProfileMobile-min.jpg';

export const Row = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RowLogros = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 4rem;
  margin-top: -3rem;
  max-width: 80%;
  height: max-content;
  margin-left: auto;
  margin-right: auto;
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
  margin: 0 auto;
  max-width: 100%;
  padding-top: 0;
  padding-bottom: 60px;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const TextNumber = styled.p`
  color: ${colors.darkGrey};
  font-size: 4rem;
  font-weight: 800;
`;

export const TextType = styled.p`
  color: ${colors.darkGrey};
  font-size: 2rem;
  font-weight: 300;
`;
