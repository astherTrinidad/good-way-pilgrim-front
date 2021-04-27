import React from 'react';
import GlobalStyle from '../../../globalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Footer, InfoSectionOneColumnNoBtn } from '../../organisms';
import url from '../../../config/url';
import {
  Header,
  PhotoProfile,
  NameProfile,
  SurnameProfile,
  ContainerName,
} from './styled';

export default function UserProfile() {
  console.log('Llamando...');
  const respuesta = getAPIProfile(localStorage.getItem('id'));
  console.log(respuesta);
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Header />
      <PhotoProfile />
      <ContainerName>
        <NameProfile>Nombre</NameProfile> {/* {localStorage.getItem('name')} */}
        <SurnameProfile>Apellidos</SurnameProfile>
      </ContainerName>

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
