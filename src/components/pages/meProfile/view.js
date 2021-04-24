import React, { useState, useEffect } from 'react';
import GlobalStyle from '../../../globalStyles';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Navbar, Footer, InfoSectionOneColumn } from '../../organisms';
import { userProfile } from './Data';
import url from '../../../config/url';
import {
  Header,
  PhotoProfile,
  NameProfile,
  SurnameProfile,
  ContainerName,
} from './styled';

<<<<<<< HEAD
async function getAPIProfile() {
  return fetch(`http://localhost:8000/pri/showProfileResume`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
    }, 
  }).then(data => data.json());
}


const MeProfile = () => {
=======
export default function MeProfile() {
>>>>>>> b779843188aaa8ad3aeb09746e036f88d8b40a31
  const queryParam = new URLSearchParams(useLocation().search);
  const [userData, setUserData] = useState({});
  const [isFetchingUser, setIsFetchingUser] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      try {
<<<<<<< HEAD
        setIsFetchingUser(true)
        const response = await getAPIProfile();
        setUserData(response)
      } catch {
        toast.error('Error del servidor')
=======
        setIsFetchingUser(true);
        const response = await apiMeProfile(queryParam.get('id'));
        setUserData(response);
      } catch {
        toast.error('Error');
>>>>>>> b779843188aaa8ad3aeb09746e036f88d8b40a31
      } finally {
        setIsFetchingUser(false);
      }
    }
    fetchProfile();
  }, []);

 
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Header />
      <PhotoProfile />
      <ContainerName>
        <NameProfile>{userData?.name}</NameProfile>          
      </ContainerName>
      <InfoSectionOneColumn {...userProfile} />
      <Footer />
    </Router>
  );
<<<<<<< HEAD
 }
  
=======
}
>>>>>>> b779843188aaa8ad3aeb09746e036f88d8b40a31

async function apiMeProfile() {
  return fetch(`${url.base}${url.meProfile}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
    },
  }).then(data => data.json());
}
