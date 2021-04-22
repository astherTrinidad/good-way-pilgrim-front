import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../../globalStyles';
import ShowProfile from '../../pages/showProfile/index';
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

const Navbar = () => {
  //Hook: valor inicial, función que actualizará el valor = inicializamos estado
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
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
          <NavLogo to="/" />
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/showProfile">Mi perfil</NavLinks>
            </NavItem>
            <NavItem>
              <SubNavItem>
                <NavLinks to="/editProfile">Editar perfil</NavLinks>
              </SubNavItem>
            </NavItem>
            <NavItem>
              <SubNavItem>
                <NavLinks to="/showUsers">Buscar usuarios</NavLinks>
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
                <NavBtnLink to="/login">
                  <Button primary>Cerrar sesión</Button>
                </NavBtnLink>
              ) : (
                <NavBtnLink to="/login">
                  <Button fontBig primary>
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
