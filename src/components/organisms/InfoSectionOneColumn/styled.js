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

// export const ImgWrapper = styled.div`
//   max-width: 555px;
//   display: flex;
//   justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
// `;

// export const TopLine = styled.div`
//   color: ${({ lightTopLine }) => (lightTopLine ? '#505050' : '#00B7B5')};
//   font-size: 1.5em;
//   line-height: 16px;
//   font-weight: 700;
//   letter-spacing: 1.4px;
//   margin-bottom: 16px;
//   text-align: left;
// `;

// export const Img = styled.img`
//   padding-right: 0;
//   border: 0;
//   max-width: 100%;
//   vertical-align: middle;
//   display: inline-block;
//   max-height: 500px;
//   background-color: pink;
// `;

export const Heading = styled.h1`
  font-family: 'Roboto', sans-serif;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 1rem;
  margin-bottom: 2rem;
  font-size: 3.5em;
  line-height: 1.5;
  max-width: 72%;
  color: ${({ lightText }) => (lightText ? '#545454' : '#1c2237')};
  text-align: center;

  @media screen and (max-width: 960px) {
    margin-top: 1rem;
    margin-bottom: 2rem;
    font-size: 2em;
    max-width: 87%;
  }
`;

export const Subtitle = styled.p`
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 3rem;
  margin-bottom: 2rem;
  text-align: center;
  width: 100%;
  font-size: 1.75em;
  line-height: 1.5;
  letter-spacing: 0.075em;
  color: ${({ lightTextDesc }) => (lightTextDesc ? '#545454' : '#1c2237')};

  @media screen and (max-width: 960px) {
    display: none;
  }
`;
