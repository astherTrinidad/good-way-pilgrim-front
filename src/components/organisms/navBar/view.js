import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import appRoutes from '../../../config/appRoutes';
import url from '../../../config/url';
import { toast } from 'react-toastify';
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
  const [userData, setUserData] = useState({});

  //Hook: valor inicial, función que actualizará el valor = inicializamos estado
  const [click, setClick] = useState(true);

  const handleClick = () => setClick(!click);

  const closeSession = async e => {
    e.preventDefault();
    sessionStorage.removeItem('token');
    history.replace(appRoutes.login);
  };

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await apiMeProfile();

        const rutaPerfil =
          response.achievements.length !== 0 || response.paths !== 0
            ? appRoutes.meProfileData
            : appRoutes.meProfile;

        console.log(rutaPerfil);
        if (response.message == 'Expired token') {
          toast.info(
            'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
          );
          history.replace(appRoutes.login);
        } else {
          setUserData(response);
          setUserData(rutaPerfil);
        }
      } catch {
        toast.error(
          'Error del servidor. Por favor, cierra sesión y vuelve a entrar'
        );
      }
    }
    fetchProfile();
  }, []);

  return (
    <IconContext.Provider
      value={{ color: '#ffff' }}
      tabIndex={0}
      aria-label="Acceso área usuario"
      role="Área usuario"
    >
      <Nav>
        <NavbarContainer>
          <NavLogo to={userData} tabIndex={0} />
          <NavMenuUser onClick={handleClick} click={click}>
            <NavItem>
              <NavLinksMenu to={appRoutes.meEditProfile}>
                Editar perfil
              </NavLinksMenu>
              <NavLinksMenu to={appRoutes.caminoActual}>
                Camino actual
              </NavLinksMenu>
              <NavLinksMenu to={appRoutes.caminoHistorico}>
                Histórico de caminos
              </NavLinksMenu>
              <NavBtnLink to={appRoutes.login}>
                <Button onClick={closeSession} fontBig>
                  Cerrar sesión
                </Button>
              </NavBtnLink>
            </NavItem>
          </NavMenuUser>

          <NavMenuUserResponsive
            onClick={handleClick}
            click={click}
            aria-expanded="true"
          >
            <NavItem>
              <NavLinksMenu to={userData}>Mi perfil</NavLinksMenu>
              <NavLinksMenu to={appRoutes.meEditProfile}>
                Editar perfil
              </NavLinksMenu>
              <ConchaIcon />
              <NavLinksMenu to={appRoutes.caminos}>Ver caminos</NavLinksMenu>
              <NavLinksMenu to={appRoutes.caminoActual}>
                Camino actual
              </NavLinksMenu>
              <NavLinksMenu to={appRoutes.caminoHistorico}>
                Histórico de caminos
              </NavLinksMenu>
              <ConchaIcon />

              <NavLinksMenu to={appRoutes.mochila}>Mochila</NavLinksMenu>
              <NavLinksMenu to={appRoutes.meLogros}>Logros</NavLinksMenu>
              <NavBtnLink to={appRoutes.login}>
                <Button onClick={closeSession} fontBig role="button">
                  Cerrar sesión
                </Button>
              </NavBtnLink>
            </NavItem>
          </NavMenuUserResponsive>
          <NavMenu aria-hidden="false">
            <NavLinks to={userData}>Perfil</NavLinks>
            <NavLinks to={appRoutes.caminos}>Caminos</NavLinks>
            <NavLinks to={appRoutes.mochila}>Mochila</NavLinks>
            <NavLinks to={appRoutes.meLogros}>Logros</NavLinks>
          </NavMenu>
          <MobileIcon>
            <IconUser onClick={handleClick} aria-label="Acceso área usuario">
              {click ? <FaRegUserCircle /> : <FaTimes className="FaTimes" />}
            </IconUser>
          </MobileIcon>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;

async function apiMeProfile() {
  return fetch(`${url.base}${url.meProfile}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  }).then(data => data.json());
}
