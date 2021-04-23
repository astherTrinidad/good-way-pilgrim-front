import React from 'react';
import GlobalStyle from '../../../globalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Footer, InfoSectionOneColumn } from '../../organisms';
import { userProfile } from './Data';
import {
  Header,
  PhotoProfile,
  NameProfile,
  SurnameProfile,
  ContainerName,
} from './styled';

async function getAPIProfile(id) {
  return fetch('http://localhost:8000/pri/me/meProfile?id=5', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
    }, 
  }).then(data => data.json());
}

const MeProfile = () => {
  
  console.log('Llamando...') 
  const respuesta = getAPIProfile(localStorage.getItem('id'));
  console.log(respuesta)
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Header />
      <PhotoProfile />
      <ContainerName>
        <NameProfile>{localStorage.getItem('name')}</NameProfile>
        <SurnameProfile>Apellidos</SurnameProfile>
      </ContainerName>
      <InfoSectionOneColumn {...userProfile} />
      <Footer />
    </Router>
  );
};

export default MeProfile;
