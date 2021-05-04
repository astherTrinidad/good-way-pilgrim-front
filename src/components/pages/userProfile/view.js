import React, { useState, useEffect, useCallback } from 'react';
import { Navbar, Footer } from '../../organisms';
import appRoutes from '../../../config/appRoutes';
import GlobalStyle from '../../../globalStyles';
import dropMeUserProfile from '../../../assets/images/gota-user-profile.png';
import url from '../../../config/url';
import { toast } from 'react-toastify';

import {
  Container,
  ColumnImg,
  Section,
  Img,
  ColumnText,
  Row,
  PhotoProfile,
  NameProfile,
  SurnameProfile,
  ContainerName,
  Text,
  Logro,
  RowLogros,
} from './styled';

export default function UserProfile() {
  const [userData, setUserData] = useState({});

  console.log('Llamando...');
  const respuesta = getAPIProfile(localStorage.getItem('id'));
  console.log('respuesta' + respuesta);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await getAPIProfile(40);
        setUserData(response);
      } catch {
        toast.error('Error del servidor');
      }
    }
    fetchProfile();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Row>
          <Section role="sección">Perfil peregrino</Section>
        </Row>
        <Row>
          <ColumnText>
            <Row>
              <PhotoProfile aria-label="foto de perfil" tabIndex={0} />
            </Row>
            <ContainerName aria-label="Nombre del peregrino">
              <NameProfile aria-label={userData?.name}>
                {userData?.name}
              </NameProfile>
              <SurnameProfile aria-label={userData?.surname}>
                {userData?.surname}
              </SurnameProfile>
            </ContainerName>
            <Text tabIndex={0}>Último camino: </Text>
            <Text tabIndex={0}>Número de caminos realizados: </Text>
            <Text tabIndex={0}>Kilómetros recorridos: </Text>
            <Text tabIndex={0}>Número de logros: </Text>
            <Row>
              <RowLogros tabIndex={0} aria-label="Algunos logros conseguidos">
                <Logro
                  src=""
                  alt="nombre logro 1"
                  aria-label="nombre logro 1"
                  tabIndex={0}
                />
                <Logro
                  src=""
                  alt="nombre logro 2"
                  aria-label="nombre logro 2"
                  tabIndex={0}
                />
                <Logro
                  src=""
                  alt="nombre logro 3"
                  aria-label="nombre logro 3"
                  tabIndex={0}
                />
              </RowLogros>
            </Row>
          </ColumnText>
          <ColumnImg>
            <Img
              src={dropMeUserProfile}
              alt="Un grupo de amigos abrazados en el atardecer"
            />
          </ColumnImg>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

async function getAPIProfile(id) {
  return fetch(`${url.base}${url.userProfile}?id=${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  }).then(data => data.json());
}
