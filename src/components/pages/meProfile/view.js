import React, { useState, useEffect } from 'react';
import GlobalStyle from '../../../globalStyles';
import {
  BrowserRouter as Router,
  useLocation,
  useHistory,
} from 'react-router-dom';
import { toast } from 'react-toastify';
import { Navbar, Footer, InfoSectionOneColumn } from '../../organisms';
import { userProfile } from './Data';
import url from '../../../config/url';
import {
  Header,
  PhotoProfile,
  NameProfile,
  SurnameProfile,
  ContainerName,
} from './styled';

export default function MeProfile() {
  const history = useHistory();
  // const queryParam = new URLSearchParams(useLocation().search);
  const [userData, setUserData] = useState({});
  const [isFetchingUser, setIsFetchingUser] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      try {
        setIsFetchingUser(true);
        var datos = await apiMeProfile();
        if (datos.message == undefined) {
          setUserData(datos);
        }
        if (datos.message == 'Expired token') {
          toast.info(
            'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
          );
          history.replace('../login');
        }
      } catch {
        toast.error(
          'Error del servidor. Por favor, cierra sesión y vuelve a entrar'
        );
      } finally {
        setIsFetchingUser(false);
      }
    }
    fetchProfile();
  }, []);

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Header />
      <PhotoProfile />
      <ContainerName>
        <NameProfile>{userData?.name}</NameProfile>
        <SurnameProfile>{userData?.surname}</SurnameProfile>
      </ContainerName>
      <InfoSectionOneColumn {...userProfile} />
      <Footer />
    </Router>
  );
}

async function apiMeProfile() {
  return fetch(`${url.base}${url.meProfile}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  }).then(data => data.json());
}
