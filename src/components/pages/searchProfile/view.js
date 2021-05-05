import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { Navbar, Footer } from '../../organisms';
import appRoutes from '../../../config/appRoutes';
import GlobalStyle, { Button } from '../../../globalStyles';
import dropMeUserProfile from '../../../assets/images/gota-user-profile.png';
import url from '../../../config/url';
import { toast } from 'react-toastify';

import {
  Container,
  ColumnImg,
  Section,
  Img,
  ColumnText,
  Row,
  SearchInput,
} from './styled';

export default function SearchProfile() {
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const [isFetchingUsers, setIsFetchingUsers] = useState(false);
  const respuesta = apiSearchUsers(localStorage.getItem('id'));

  const [touched, setTouched] = useState({
    name: false,
  });

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await apiSearchUsers();
        delete response.picture;
        setUserData(response);
      } catch {
        toast.error('Error del servidor.');
      }
    }
    fetchProfile();
  }, []);

  const handleChange = event => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = event => {
    setTouched({
      ...touched,
      [event.target.name]: true,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setIsFetchingUsers(true);
      var respuesta = await apiSearchUsers(userData);
      if (respuesta.message === 'Expired token') {
        toast.info(
          'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
        );
        history.replace(appRoutes.login);
      } else if (respuesta.message === 'no results found') {
        //Maquetar como consideres adecuado
        toast.info('No se han encontrado usuarios');
      } else {
        setUserData(respuesta);
        //Guardar el array de usuarios en la variable que quieras dentro de sesión y mostrarlos
        sessionStorage.setItem('matchUsers', respuesta);
      }
    } catch (e) {
      // setIsFetchingUsers(false);
      toast.error('Error del servidor. Por favor, inténtelo de nuevo');
    }
  };

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Row>
          <Section>Buscar peregrino</Section>
        </Row>
        <Row>
          <ColumnText>
            <label htmlFor="name"></label>
            <SearchInput
              label="Nombre"
              name="name"
              placeholder="Buscar por nombre"
              type="text"
              value={userData?.name}
              touched={touched.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Button
              name="Buscar"
              type="submit"
              onSubmit={handleSubmit}
              // setIsFetchingUsers={isFetchingUsers}
            >
              Buscar Peregrino
            </Button>
          </ColumnText>
          <ColumnImg>
            <Img src={dropMeUserProfile} alt="Texto" />
          </ColumnImg>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

// /*Llamada y control de errores del EP que devuelve los usuarios cuyo nombre se asemeje a la cadena introducida en el buscador*/
async function apiSearchUsers(cadenaBusqueda) {
  return fetch(`${url.base}${url.searchProfile}?string=${cadenaBusqueda}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  }).then(data => data.json());
}
// try {
//   setIsFetchingUser(true);
//   var respuesta = await apiAllAchievements();
//   if (respuesta.message == 'Expired token') {
//     toast.info(
//       'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
//     );
//     history.replace('../login');
//   } else if (respuesta.message == 'no results found') {
//     //Maquetar como consideres adecuado
//     toast.info('No se han encontrado usuarios');
//   } else {
//     //Guardar el array de usuarios en la variable que quieras dentro de sesión y mostrarlos
//     sessionStorage.setItem('matchUsers', respuesta);
//   }
// } catch (e) {
//   setIsFetchingUser(false);
//   toast.error('Error del servidor. Por favor, inténtelo de nuevo');
// }

// /*Llamada y control de errores del EP que devuelve la información del usuario seleccionado*/
// async function apiShowUser(id_usuario) {
//   return fetch(`http://localhost:8000/pri/showOtherProfile?id=${id_usuario}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//       Authorization: 'Bearer ' + sessionStorage.getItem('token'),
//     },
//   }).then(data => data.json());
// }
// try {
//   setIsFetchingUser(true);
//   var respuesta = await apiAllAchievements();
//   if (respuesta.message == 'Expired token') {
//     toast.info(
//       'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
//     );
//     history.replace('../login');
//   } else {
//     //Guardar los datos de este usuario en la variable que quieras dentro de sesión y mostrarlos
//     //Puede ser una variable que se llame siempre igual ya que cuando pases de uno a otro te da igual que se borre la info del anterior
//     sessionStorage.setItem('nuevoUsuario', respuesta);
//   }
// } catch (e) {
//   setIsFetchingUser(false);
//   toast.error('Error del servidor. Por favor, inténtelo de nuevo');
// }
