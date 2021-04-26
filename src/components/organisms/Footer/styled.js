import styled from 'styled-components';
import colors from '../../../assets/colors';
import gwpLogoColor from '../../../assets/images/gwp-logo-color.png';

import { Link } from 'react-router-dom';

export const FooterContainer = styled.div`
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const FooterText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  width: 80%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const FooterLinks = styled.div`
  justify-content: flex-start;
  margin-bottom: 1rem;
  padding: 0.5rem;
`;

export const FooterLink = styled(Link)`
  color: ${colors.darkGrey};
  text-decoration: none;
  padding: 1rem 0.5rem;

  &:hover {
    margin-top: -2rem;
    border-bottom: 3px solid ${colors.mustard};
  }
`;

export const WebsiteRights = styled.small`
  width: max-content;
  right: 0;
  color: ${colors.darkGrey};
  margin-bottom: 16px;
  padding: 0.5rem;
`;

export const LogoIcon = styled(Link)`
  background-image: url(${gwpLogoColor});
  background-size: contain;
  background-repeat: no-repeat;
  height: 70px;
  width: 120px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100px;
  margin: 1.5rem 0 2rem 0;

  &::after {
    content: '';
    display: block;
    width: 80%;
    height: 2px;
    left: 10%;
    margin-top: 5rem;
    background: ${colors.turquoise};
    position: absolute;
  }

  @media screen and (max-width: 768px) {
    &::after {
      content: '';
      display: block;
      width: 80%;
      height: 2px;
      left: 10%;
      margin-top: 5rem;
      background: ${colors.turquoise};
      position: absolute;
    }
  }
`;

export const SocialIconLink = styled.a`
  color: ${colors.darkGrey};
  font-size: 30px;
  &:hover {
    color: ${colors.mustard};
  }
`;
