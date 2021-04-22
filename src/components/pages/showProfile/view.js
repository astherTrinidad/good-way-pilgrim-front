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
      <InfoSectionOneColumn {...userProfile} />
      <Footer />
    </Router>
  );
};
export default ShowProfile;
