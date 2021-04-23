import styled from 'styled-components';
import { Link } from 'react-router-dom';
import colors from '../../../assets/colors';
import { Container } from '../../../globalStyles';
import gwpLogo from '../../../assets/images/gwp-blanco-logo.png';
import concha from '../../../assets/images/ic_concha.png';

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
  }
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  /* height: 80px; */
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
  top: 5px;

  @media screen and (max-width: 960px) {
    top: 0;
  }
`;

export const MobileIcon = styled.div`
  display: none;

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

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    justify-content: center;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 60px;
    left: ${({ click }) =>
      click ? 0 : '-100%'}; //haga click, si hace clic es true -> muestro menú
    opacity: 1;
    transition: all 0.5s ease;
    background: ${colors.mustard};
  }
`;

export const NavItem = styled.li`
  height: max-content;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 3px solid ${colors.mustard};
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;
export const NavLinks = styled(Link)`
  color: ${colors.white};
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 2rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 1rem 0 1rem 0;
    margin-bottom: 1rem;
    width: 100%;
    display: table;
    height: max-content;
    font-size: 1em;

    &:hover {
      background-color: ${colors.white};
      color: ${colors.darkGrey};
      transition: all 0.3s ease;
      font-weight: 700;
    }
  }
`;

export const SubNavItem = styled(Link)`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    text-align: center;
    width: 100%;

    &:hover {
      background-color: ${colors.white};
      color: ${colors.darkGrey};
      transition: all 0.3s ease;
    }
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

    &::before {
      content: '';
      display: block;
      width: 40%;
      height: 3px;
      left: 0;
      margin-top: 1rem;
      background: ${colors.white};
      position: absolute;
    }

    &::after {
      content: '';
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

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-self: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
