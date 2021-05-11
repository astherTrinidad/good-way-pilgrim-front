import React, { useState, useEffect } from 'react';
import GlobalStyle from '../../../globalStyles';
import appRoutes from '../../../config/appRoutes';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Navbar, Footer, InfoSectionOneColumn } from '../../organisms';
import url from '../../../config/url';
import profilePhoto from '../../../assets/images/photo-profile-generic.png';
import {
  Header,
  PhotoProfile,
  NameProfile,
  SurnameProfile,
  ContainerName,
  ContainerPhoto,
  Container,
} from './styled';

export default function MeProfileData() {
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const [isFetchingUser, setIsFetchingUser] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      try {
        setIsFetchingUser(true);
        const datos = await apiMeProfile();
        if (datos.message === undefined) {
          setUserData(datos);
        }
        if (datos.message === 'Expired token') {
          history.replace(appRoutes.login);
          toast.info(
            'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
          );
          history.replace(appRoutes.login);
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
    <>
      <GlobalStyle />
      <Navbar />
      <Header />
      <Container>
        <PhotoProfile
          src={userData.picture ? userData.picture : profilePhoto}
          alt="Foto de perfil"
          aria-label="foto de perfil"
        ></PhotoProfile>
        <ContainerName aria-label="Nombre de perfil">
          <NameProfile>{userData?.name}</NameProfile>
          <SurnameProfile>{userData?.surname}</SurnameProfile>
        </ContainerName>
      </Container>

      <Footer />
    </>
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
