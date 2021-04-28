import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import appRoutes from '../../../config/appRoutes';
import { FaTimes, FaRegUserCircle } from 'react-icons/fa';
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
  NavMenuUserResponsive,
  ConchaIcon,
  NavBtnLink,
  IconUser,
  NavMenuUser,
  NavLinksMenu,
} from './styled';

const Navbar = () => {
  //Hook: valor inicial, función que actualizará el valor = inicializamos estado
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);

  const closeSession = async e => {
    e.preventDefault();
    sessionStorage.removeItem('token');
    window.location.reload();
  };

  return (
    <IconContext.Provider value={{ color: '#ffff' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to={appRoutes.meProfile} />
          <NavMenuUser onClick={handleClick} click={click}>
            <NavItem>
              <NavLinksMenu to={appRoutes.meProfile}>Mi perfil</NavLinksMenu>
              <NavLinksMenu to={appRoutes.meEditProfile}>
                Editar perfil
              </NavLinksMenu>
              <NavLinksMenu to={appRoutes.userProfile}>
                Buscar peregrino
              </NavLinksMenu>
              <NavBtnLink to={appRoutes.login}>
                <Button onClick={closeSession} fontBig>
                  Cerrar sesión
                </Button>
              </NavBtnLink>
            </NavItem>
          </NavMenuUser>

          <NavMenuUserResponsive onClick={handleClick} click={click}>
            <NavItem>
              <NavLinksMenu to={appRoutes.meProfile}>Mi perfil</NavLinksMenu>
              <NavLinksMenu to={appRoutes.meEditProfile}>
                Editar perfil
              </NavLinksMenu>
              <NavLinksMenu to={appRoutes.userProfile}>
                Buscar peregrino
              </NavLinksMenu>
              <ConchaIcon />
              <NavLinksMenu to={appRoutes.caminos}>Caminos</NavLinksMenu>
              <NavLinksMenu to={appRoutes.mochila}>Mochila</NavLinksMenu>
              <NavLinksMenu to={appRoutes.logros}>Logros</NavLinksMenu>
              <NavBtnLink to={appRoutes.login}>
                <Button onClick={closeSession} fontBig>
                  Cerrar sesión
                </Button>
              </NavBtnLink>
            </NavItem>
          </NavMenuUserResponsive>
          <NavMenu>
            <NavLinks to={appRoutes.meProfile}>Perfil</NavLinks>
            <NavLinks to={appRoutes.meEditProfile}>Caminos</NavLinks>
            <NavLinks to={appRoutes.userProfile}>Mochila</NavLinks>
            <NavLinks to={appRoutes.searchProfile}>Logros</NavLinks>
          </NavMenu>
          <MobileIcon>
            <IconUser onClick={handleClick}>
              {click ? <FaRegUserCircle /> : <FaTimes className="FaTimes" />}
            </IconUser>
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
