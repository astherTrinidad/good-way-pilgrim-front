import React from 'react';
import GlobalStyle from '../../../globalStyles';
import { BrowserRouter as Router } from 'react-router-dom';
import { Navbar, Footer, InfoSection } from '../../organisms';
import { userProfile } from './Data';
import { Header, PhotoProfile } from './styled';

const ShowProfile = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Header />
      <PhotoProfile />
      <InfoSection {...userProfile} />
      <Footer />
    </Router>
  );
};
export default ShowProfile;
