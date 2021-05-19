import React, { useState, useEffect } from 'react';
import GlobalStyle from '../../../globalStyles';
import appRoutes from '../../../config/appRoutes';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Navbar, Footer } from '../../organisms';
import url from '../../../config/url';
import profilePhoto from '../../../assets/images/photo-profile-generic.png';
import {
  Header,
  PhotoProfile,
  NameProfile,
  SurnameProfile,
  ContainerName,
  Container,
  RowLogros,
  Subtitle,
  TextWrapper,
  Heading,
  TextNumber,
  TextType,
  Row,
  ConchaIcon,
  ConchaIconContainer,
  Line,
  Column,
} from './styled';
import Logro from '../../atoms/logro';

export default function MeProfileData() {
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const [userLogros, setUserLogros] = useState([]);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const datos = await apiMeProfile();
        if (datos.message === undefined) {
          setUserData(datos);
          console.log(datos);
          setUserLogros(datos.achievements);
        }
        if (datos.message === 'Expired token') {
          history.replace(appRoutes.login);
          toast.info(
            'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
          );
          history.replace(appRoutes.login);
        }
      } catch {
        toast.error(
          'Error del servidor. Por favor, cierra sesión y vuelve a entrar'
        );
      }
    }
    fetchProfile();
  }, []);

  const renderLastLogros = userLogros.map(item => {
    const ruta = '/assets/logros/color/';

    return (
      <Logro
        id={item.id}
        src={`${ruta}${item.slug}.png`}
        name={item.name}
        description={item.description}
        alt={item.name}
        tabIndex={0}
      />
    );
  });

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Header loading="lazy" />
      <Container>
        <PhotoProfile
          src={userData.picture ? userData.picture : profilePhoto}
          alt="Foto de perfil"
          aria-label="foto de perfil"
        ></PhotoProfile>
        <ContainerName aria-label="Nombre de perfil">
          <NameProfile>{userData?.name}</NameProfile>
          <SurnameProfile>{userData?.surname}</SurnameProfile>
        </ContainerName>
        <TextWrapper>
          <Heading aria-label="Tus últimos logros conseguidos" tabIndex="0">
            Tus últimos logros conseguidos
          </Heading>
          <Subtitle aria-label="¡Enhorabuena!" tabIndex="0">
            ¡Enhorabuena!
          </Subtitle>
        </TextWrapper>
        <RowLogros tabIndex={0} aria-label="Logros">
          {renderLastLogros}
        </RowLogros>
        <Row>
          <Column>
            <TextWrapper>
              <TextNumber>{userData?.paths}</TextNumber>
              <TextType>Caminos</TextType>
            </TextWrapper>
          </Column>
          <Column>
            <ConchaIconContainer>
              <ConchaIcon />
            </ConchaIconContainer>
            <Line />
          </Column>
          <Column>
            <TextWrapper>
              <TextNumber>{userData?.km}</TextNumber>
              <TextType>Km totales</TextType>
            </TextWrapper>
          </Column>
        </Row>
      </Container>

      <Footer />
    </>
  );
}

async function apiMeProfile() {
  return fetch(`${url.base}${url.meProfile}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  }).then(data => data.json());
}
