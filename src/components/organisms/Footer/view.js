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

function Footer() {
  return (
    <FooterContainer>
      <LogoIcon to="/meProfile" />
      <SocialIcons>
        <SocialIconLink
          href="https://www.instagram.com/goodwaypilgrim/"
          target="_blank"
          aria-label="Instagram"
        >
          <FaInstagram />
        </SocialIconLink>
        <SocialIconLink
          href="https://twitter.com/way_pilgrim"
          target="_blank"
          aria-label="Twitter"
        >
          <FaTwitter />
        </SocialIconLink>
      </SocialIcons>
      <FooterText>
        <FooterLinks>
          <FooterLink to="/frequent-question">Preguntas Frecuentes</FooterLink>
          <FooterLink to="/privacy-consumers">
            Política de Privacidad
          </FooterLink>
        </FooterLinks>
        <WebsiteRights>GOOD WAY PILGRIM © 2021</WebsiteRights>
      </FooterText>
    </FooterContainer>
  );
}

export default Footer;
