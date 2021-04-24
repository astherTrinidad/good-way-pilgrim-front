import React, { useState, useEffect } from 'react';
import GlobalStyle from '../../../globalStyles';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Navbar, Footer, InfoSectionOneColumn } from '../../organisms';
import { userProfile } from './Data';
import  url from '../../../config/url' 
import {
  Header,
  PhotoProfile,
  NameProfile,
  SurnameProfile,
  ContainerName,
} from './styled';

async function getAPIProfile() {
  return fetch( url.base + url.meProfile , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
    }, 
  }).then(data => data.json());
}


const MeProfile = () => {
  const queryParam = new URLSearchParams(useLocation().search);
  const [userData, setUserData] = useState({})
  const [isFetchingUser, setIsFetchingUser] = useState(false)

  useEffect(() => {
    async function fetchProfile() {
      try {
        setIsFetchingUser(true)
        const response = await getAPIProfile(queryParam.get("id"));
        setUserData(response)
      } catch {
        toast.error('Error')
      } finally {
        setIsFetchingUser(false)
      }
    }
    fetchProfile()
  }, [])

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Header />
      <PhotoProfile />
      <ContainerName>
        <NameProfile>{userData?.name}</NameProfile>
        <SurnameProfile>{userData?.surname}</SurnameProfile>
      </ContainerName>
      <InfoSectionOneColumn {...userProfile} />
      <Footer />
    </Router>
  );
};

export default MeProfile;
