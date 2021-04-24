import React from 'react';
import GlobalStyle from '../../../globalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Footer, InfoSectionOneColumnNoBtn } from '../../organisms';
import { userProfile } from './Data';
import  url from '../../../config/url' 
import {
  Header,
  PhotoProfile,
  NameProfile,
  SurnameProfile,
  ContainerName,
} from './styled';

async function getAPIProfile(id) {
  return fetch( `${url.base}${url.userProfile}?id=5`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
    }, 
  }).then(data => data.json());
}

const ShowProfile = () => {
  
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
      {/* <InfoSectionOneColumnNoBtn {...userProfile} /> */}
      <Footer />
    </Router>
  );
};

export default ShowProfile;
