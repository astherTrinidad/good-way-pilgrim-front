import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
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
    <Router>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Row>
          <Section>Perfil peregrino</Section>
        </Row>
        <Row>
          <ColumnText>
            <Row>
              <PhotoProfile />
            </Row>
            <ContainerName>
              <NameProfile>{userData?.name}</NameProfile>
              <SurnameProfile>{userData?.surname}</SurnameProfile>
            </ContainerName>
            <Text>Último camino: </Text>
            <Text>Número de caminos realizados: </Text>
            <Text>Kilómetros recorridos: </Text>
            <Text>Número de logros: </Text>
            <Row>
              <RowLogros>
                <Logro src="" alt="" />
                <Logro src="" alt="" />
                <Logro src="" alt="" />
              </RowLogros>
            </Row>
          </ColumnText>
          <ColumnImg>
            <Img src={dropMeUserProfile} alt="Texto" />
          </ColumnImg>
        </Row>
      </Container>
      <Footer />
    </Router>
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
