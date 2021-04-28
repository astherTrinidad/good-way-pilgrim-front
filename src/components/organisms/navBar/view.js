import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
  const history = useHistory();

  //Hook: valor inicial, función que actualizará el valor = inicializamos estado
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);

  const closeSession = async e => {
    e.preventDefault();
    sessionStorage.removeItem('token');
    history.replace(appRoutes.login);
  };

  return (
    <IconContext.Provider value={{ color: '#ffff' }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to={appRoutes.meProfile} />
          <NavMenuUser onClick={handleClick} click={click}>
            <NavItem>
              <NavLinksMenu to={appRoutes.meEditProfile}>
                Editar perfil
              </NavLinksMenu>
              <NavLinksMenu to={appRoutes.searchProfile}>
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
              <NavLinksMenu to={appRoutes.searchProfile}>
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
            <NavLinks to={appRoutes.caminos}>Caminos</NavLinks>
            <NavLinks to={appRoutes.mochila}>Mochila</NavLinks>
            <NavLinks to={appRoutes.logros}>Logros</NavLinks>
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
