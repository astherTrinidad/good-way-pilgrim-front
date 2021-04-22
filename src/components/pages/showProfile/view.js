import React from 'react';
import GlobalStyle from '../../../globalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Footer, InfoSection } from '../../organisms';
import { userProfile } from './Data';
import {
  Header,
  PhotoProfile,
  NameProfile,
  SurnameProfile,
  ContainerName,
} from './styled';

const ShowProfile = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Header />
      <PhotoProfile />
      <ContainerName>
        <NameProfile>Nombre</NameProfile>
        <SurnameProfile>Apellidos</SurnameProfile>
      </ContainerName>
      <InfoSection {...userProfile} />
      <Footer />
    </Router>
  );
};
export default ShowProfile;
