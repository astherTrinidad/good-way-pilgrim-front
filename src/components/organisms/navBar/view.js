import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../../globalStyles';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  SubNavItem,
  ConchaIcon,
  NavItemBtn,
  NavBtnLink,
} from './styled';
import appRoutes from '../../../config/appRoutes';

const Navbar = () => {
  //Hook: valor inicial, función que actualizará el valor = inicializamos estado
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);

  const closeSession = async e => {
    e.preventDefault();
    sessionStorage.removeItem('token');
    window.location.reload();
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);
  //cada vez que cambie de tamaño mostrar el botón
  window.addEventListener('resize', showButton);

  return (
    <IconContext.Provider value={{ color: '#ffff' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to={appRoutes.meProfile} />
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to={appRoutes.meProfile}>Mi perfil</NavLinks>
            </NavItem>
            <NavItem>
              <SubNavItem>
                <NavLinks to={appRoutes.meEditProfile}>Editar perfil</NavLinks>
              </SubNavItem>
            </NavItem>
            <NavItem>
              <SubNavItem>
                <NavLinks to={appRoutes.userProfile}>Buscar peregrino</NavLinks>
              </SubNavItem>
            </NavItem>
            <ConchaIcon />
            <NavItem>
              <NavLinks to="/caminos">Caminos</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/mochila">Mochila</NavLinks>
            </NavItem>

            <NavItem>
              <NavLinks to="/logros">Logros</NavLinks>
            </NavItem>
            <NavItemBtn>
              {button ? (
                <NavBtnLink to={appRoutes.login}>
                  <Button onClick={closeSession} primary>
                    Cerrar sesión
                  </Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to={appRoutes.login}>
                  <Button onClick={closeSession} fontBig primary>
                    Cerrar sesión
                  </Button>
                </NavBtnLink>
              )}
            </NavItemBtn>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
