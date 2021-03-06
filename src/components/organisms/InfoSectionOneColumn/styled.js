import styled from 'styled-components';
import colors from '../../../assets/colors';

export const InfoSec = styled.div`
  color: ${colors.darkGrey};
  padding: 50px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#ffc200')};
  justify-content: center;

  @media screen and (max-width: 960px) {
    padding: 0;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 100%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
  }
`;

export const TextWrapper = styled.div`
  justify-content: center;
  align-items: center;
  max-width: 100%;
  padding-top: 0;
  padding-bottom: 60px;
  text-align: center;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const Heading = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 3.5em;
  line-height: 1.5;
  max-width: 94%;
  color: ${({ lightText }) => (lightText ? '#545454' : '#1c2237')};
  text-align: center;
  color: ${colors.darkGrey};

  @media screen and (max-width: 960px) {
    font-size: 2em;
  }

  @media screen and (max-width: 768px) {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 1.5em;
    max-width: 100%;
  }
`;

export const Subtitle = styled.p`
  font-family: 'Poppins', sans-serif;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  width: 86%;
  font-size: 1.75em;
  line-height: 1.5;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#545454' : '#1c2237')};

  @media screen and (max-width: 960px) {
    font-size: 1.35em;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
