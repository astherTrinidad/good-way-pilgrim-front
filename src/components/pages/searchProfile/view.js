import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
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
import colors from '../../../assets/colors';
import { result } from 'lodash';

export default function SearchProfile() {
  const history = useHistory();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      var respuesta = await apiSearchUsers(searchTerm);
      setSearchResults(respuesta);
      if (respuesta.message == 'Expired token') {
        toast.info(
          'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
        );
        history.replace(appRoutes.login);
      } else if (respuesta.message == 'no results found') {
        toast.info('No se han encontrado usuarios');
      } else {
        sessionStorage.setItem('matchUsers', respuesta);
      }
    } catch (e) {
      toast.error('Error del servidor. Por favor, inténtelo de nuevo');
    }
  };

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Row>
          <Section role="sección" tabIndex="0">
            Buscar peregrino
          </Section>
        </Row>
        <Row>
          <ColumnText>
            <form onSubmit={handleSubmit}>
              <Row>
                <label htmlFor="name"></label>
                <SearchInput
                  type="text"
                  placeholder="Buscar"
                  value={searchTerm}
                  onChange={handleChange}
                />
              </Row>
              <ul>
                {searchResults.map(item => (
                  <li>{item}</li>
                ))}
              </ul>
              <Button name="Buscar" type="submit">
                Ver perfil
              </Button>
            </form>
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
async function apiSearchUsers(dataUser) {
  console.log('en APi method ' + dataUser);
  return fetch(`${url.base}${url.searchProfile}?string=${dataUser}`, {
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

// const respuesta = apiSearchUsers(sessionStorage.getItem('id'));
/* <FaSearch
                  aria-hidden="true"
                  color={colors.turquoise}
                  fontSize="2em"
                  onClick={handleSubmit}
                  title="Buscar usuario"
                /> */
