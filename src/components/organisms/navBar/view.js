import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
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
} from './styled';

const Navbar = () => {
  //Hook: valor inicial, función que actualizará el valor = inicializamos en falso
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

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
              <NavLinks to="/perfil">Mi perfil</NavLinks>
            </NavItem>
            <NavItem>
              <SubNavItem>
                <NavLinks to="/editarPerfil">Editar perfil</NavLinks>
              </SubNavItem>
            </NavItem>
            <NavItem>
              <SubNavItem>
                <NavLinks to="/buscarPerfil">Buscar perfil</NavLinks>
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
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
