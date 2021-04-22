import React from 'react';
import GlobalStyle from '../../../globalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Footer, InfoSectionTwoColumn } from '../../organisms';
import { editUserProfile } from './Data';
import {
  Header,
  PhotoProfile,
  NameProfile,
  SurnameProfile,
  ContainerName,
} from './styled';

const EditProfile = () => {
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
      <InfoSectionTwoColumn {...editUserProfile} />
      <Footer />
    </Router>
  );
};
export default EditProfile;
