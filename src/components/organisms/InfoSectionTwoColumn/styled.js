import styled from 'styled-components';
import colors from '../../../assets/colors';

export const InfoSec = styled.div`
  color: ${colors.white};
  padding: 160px 0;
  background: ${({ lightBg }) => (lightBg ? '#fff' : '#ffc200')};
  margin-top: -25rem;
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;
  height:max-content;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 0;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? '#545454' : '#1c2237')};
  font-family: 'Roboto', sans-serif;
  font-size: 2em;
  line-height: 1.5;
  font-weight: 700;
  margin-bottom: 16px;

  @media screen and (max-width: 960px) {
display: none;
}


`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 550px;
  justify-self:end;
  margin-left: 5rem;

  @media screen and (max-width: 960px) {
display: none;
}
`;
