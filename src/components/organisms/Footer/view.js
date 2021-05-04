import React from 'react';
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import {
  FooterContainer,
  FooterLink,
  FooterLinks,
  FooterText,
  LogoIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './styled';
import appRoutes from '../../../config/appRoutes';

function Footer() {
  return (
    <FooterContainer>
      <LogoIcon to={appRoutes.meProfile} aria-label="Logo Good Way Pilgrim" />
      <SocialIcons>
        <SocialIconLink
          href="https://www.instagram.com/goodwaypilgrim/"
          target="_blank"
          aria-label="Vísitanos en Instagram"
        >
          <FaInstagram />
        </SocialIconLink>
        <SocialIconLink
          href="https://twitter.com/way_pilgrim"
          target="_blank"
          aria-label="Vísitanos en Twitter"
        >
          <FaTwitter />
        </SocialIconLink>
      </SocialIcons>
      <FooterText>
        <FooterLinks>
          <FooterLink to={appRoutes.frequentQuestion}>
            Preguntas Frecuentes
          </FooterLink>
          <FooterLink to={appRoutes.privacyConsumers}>
            Política de Privacidad
          </FooterLink>
        </FooterLinks>
        <WebsiteRights>GOOD WAY PILGRIM © 2021</WebsiteRights>
      </FooterText>
    </FooterContainer>
  );
}

export default Footer;
