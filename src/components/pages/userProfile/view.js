import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { Navbar, Footer } from '../../organisms';
import appRoutes from '../../../config/appRoutes';
import GlobalStyle from '../../../globalStyles';
import dropMeUserProfile from '../../../assets/images/gota-user-profile.png';
import url from '../../../config/url';

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
  console.log('Llamando...');
  const respuesta = getAPIProfile(localStorage.getItem('id'));
  console.log(respuesta);
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
              <NameProfile>Nombre</NameProfile>
              <SurnameProfile>Apellidos</SurnameProfile>
            </ContainerName>
            <Text>Último camino: </Text>
            <Text>Número de caminos realizados: </Text>
            <Text>Kilómetros recorridos: </Text>
            <Text>Número de logros: </Text>
            <Row>
              <RowLogros>
                <Logro src="" alt="Texto" />
                <Logro src="" alt="Texto" />
                <Logro src="" alt="Texto" />
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
