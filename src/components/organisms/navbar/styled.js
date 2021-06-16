import styled from "styled-components";
import { Link } from "react-router-dom";
import colors from "../../../assets/colors";
import { Container } from "../../../globalStyles";
import gwpLogo from "../../../assets/images/gwp-blanco-logo.png";
import concha from "../../../assets/images/ic_concha.png";

export const Nav = styled.nav`
  background: ${colors.turquoise};
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;
  opacity: 0.9;

  @media screen and (max-width: 960px) {
    opacity: 1;
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  ${Container}
`;

export const NavLogo = styled(Link)`
  background-image: url(${gwpLogo});
  background-size: contain;
  background-repeat: no-repeat;
  height: 40px;
  width: 110px;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  display: flex;
  align-items: center;
  position: relative;

  @media screen and (max-width: 960px) {
    top: 0;
  }
`;

export const NavItem = styled.li`
  border-bottom: 3px solid transparent;
  justify-content: center;

  &:hover {
    border-bottom: 3px solid ${colors.mustard};
  }

  @media screen and (max-width: 960px) {
    width: 100%;
    justify-content: center;
    align-items: center;

    &:hover {
      border: none;
    }
  }
`;

/** Dropdown menu desktop */

export const MobileIcon = styled.div`
  display: block;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const IconUser = styled.div`
  display: flex;
  position: absolute;
  top: -5px;
  right: 0;
  transform: translate(-100%, 60%);
  font-size: 2rem;
  cursor: pointer;

  .FaTimes {
    background-color: ${colors.mustard};
    margin-top: -22px;
    margin-right: -23px;
    width: 63px;
    height: 63px;
    padding: 1rem;
  }

  .FaBars {
    margin-top: -22px;
    margin-right: -23px;
    width: 63px;
    height: 63px;
    padding: 1rem;
  }
`;

export const NavMenuUser = styled.ul`
  list-style: none;
  flex-direction: column;
  width: max-content;
  height: max-content;
  position: absolute;
  top: 60px;
  padding: 1.25rem 0;
  transition: all 0.5s ease;
  right: 0;

  top: ${({ click }) =>
    click ? 0 : "100%"}; //haga click, si hace clic es true -> muestro menú
  opacity: ${({ click }) => (click ? "0" : 1)};
  display: ${({ click }) => (click ? "none" : "visibility")};

  justify-content: center;
  background: ${colors.mustard};
  transition: all 0.5s ease;
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const NavLinksMenu = styled(Link)`
  color: ${colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 1rem 3rem;
  height: 100%;
  width: 100%;
  justify-content: center;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.darkGrey};
    transition: all 0.3s ease;
  }

  @media screen and (max-width: 960px) {
    margin-bottom: 1rem;
    width: 100%;
    display: flex;
    height: max-content;
    font-size: 1em;
  }
`;

/** End Dropdown menu desktop */

/** Dropdown menu mobile */
export const NavMenuUserResponsive = styled.ul`
  align-items: center;
  list-style: none;
  flex-direction: column;
  width: 100%;
  height: max-content;
  position: absolute;
  top: 60px;
  left: ${({ click }) =>
    click ? "-100%" : 0}; //haga click, si hace clic es true -> muestro menú
  opacity: 1;
  padding: 0 0 1rem 0;
  transition: all 0.5s ease;
  justify-content: center;
  background: ${colors.mustard};
  @media screen and (min-width: 960px) {
    display: none;
  }
`;
export const ConchaIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    background-image: url(${concha});
    background-size: contain;
    background-repeat: no-repeat;
    height: 40px;
    width: 40px;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    margin-left: auto;
    margin-right: auto;

    &::before {
      content: "";
      display: block;
      width: 40%;
      height: 3px;
      left: 0;
      margin-top: 1rem;
      background: ${colors.white};
      position: absolute;
    }

    &::after {
      content: "";
      display: block;
      width: 40%;
      height: 3px;
      right: 0;
      margin-top: 1rem;
      background: ${colors.white};
      position: absolute;
    }
  }
`;
/** End Dropdown menu mobile */

/** menu nav */

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;

  @media screen and (max-width: 960px) {
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 60px;
    left: ${({ click }) =>
      click ? 0 : "-100%"}; //haga click, si hace clic es true -> muestro menú
    opacity: 1;
    transition: all 0.5s ease;
    background: ${colors.mustard};
  }
`;

export const NavLinks = styled(Link)`
  color: ${colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 2.5rem;

  &:hover {
    font-weight: 700;
    border-bottom: 3px solid ${colors.mustard};
  }

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 1rem 0 1rem 0;
    margin-bottom: 1rem;
    width: 100%;
    display: table;
    height: max-content;
    font-size: 1em;
  }
`;

/** End menu nav */

export const NavBtnLink = styled(Link)`
  padding: 1rem 3rem;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
