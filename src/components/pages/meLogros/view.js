import React, { useState, useEffect, useCallback } from 'react';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { Navbar, Footer } from '../../organisms';
import appRoutes from '../../../config/appRoutes';
import GlobalStyle from '../../../globalStyles';
import url from '../../../config/url';
import { toast } from 'react-toastify';
import {
  Container,
  Section,
  Row,
  LogroBN,
  LogroColor,
  RowLogros,
  TextWrapper,
  Heading,
  Subtitle,
  ButtonDelete,
} from './styled';
import DeleteLogros from '../../modals/deleteLogros';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Logros() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await apiAllAchievements();
        setUserData(response);
      } catch {
        toast.error('Error del servidor');
      }
    }
    fetchProfile();
  }, []);

  /* modal */
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Row>
          <Section role="sección">Logros</Section>
        </Row>
        <Row>
          <TextWrapper>
            <Heading
              aria-label="¿Quién dijo que conseguir un logro fuera difícil?"
              tabIndex="0"
            >
              ¿Quién dijo que conseguir un logro fuera difícil?
            </Heading>
            <Subtitle
              aria-label="Emprende el camino y al final del día selecciona 
              los logros conseguidos"
              tabIndex="0"
            >
              Emprende el camino y al final del día selecciona los logros
              conseguidos
            </Subtitle>
          </TextWrapper>
        </Row>
        <RowLogros tabIndex={0} aria-label="Logros">
          <LogroBN
            src=""
            alt="logro bn"
            aria-label="nombre logro"
            tabIndex={0}
          />

          <LogroColor
            src=""
            alt="logro color"
            aria-label="nombre logro"
            tabIndex={0}
          />
        </RowLogros>
        <Row>
          <Section role="sección">AntiLogros</Section>
        </Row>
        <Row>
          <TextWrapper>
            <Heading
              aria-label="¿Quién dijo que conseguir un logro fuera difícil?"
              tabIndex="0"
            >
              ¿Quién dijo que conseguir un logro fuera difícil?
            </Heading>
            <Subtitle
              aria-label="Emprende el camino y al final del día selecciona 
              los logros conseguidos"
              tabIndex="0"
            >
              Emprende el camino y al final del día selecciona los logros
              conseguidos
            </Subtitle>
          </TextWrapper>
        </Row>
        <RowLogros tabIndex={0} aria-label="Logros">
          <LogroBN
            src=""
            alt="logro bn"
            aria-label="nombre logro"
            tabIndex={0}
          />
          <LogroColor
            src=""
            alt="logro color"
            aria-label="nombre logro"
            tabIndex={0}
          />
        </RowLogros>
        <ButtonDelete
          label="Resetear logros"
          name="Resetear logros"
          id="delete"
          type="button"
          onClick={handleClickOpen}
          button-label="Resetear logros"
        >
          Resetear logros
        </ButtonDelete>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClick={handleClose}
          aria-labelledby="¿Empezamos de cero?"
          aria-describedby="Modal de confirmación resetear logros"
          aria-modal="true"
          role="dialog"
        >
          <DeleteLogros />
        </Dialog>
      </Container>
      <Footer />
    </>
  );
}

/*Llamada y control de errores del EP que devuelve todos los logros*/
async function apiAllAchievements() {
  return fetch(`${url.base}${url.logros}`, {
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
//       history.replace(appRoutes.login);

//   } else {
//     //Guardar el array de logros en la variable que quieras dentro de sesión
//     sessionStorage.setItem('allAchievements', respuesta);
//   }
// } catch (e) {
//   setIsFetchingUser(false);
//   toast.error('Error del servidor. Por favor, inténtelo de nuevo');
// }

/*Llamada y control de errores del EP que devuelve los logros que ha completado el usuario*/
async function apiMyAchievements() {
  return fetch(`${url.base}${url.meLogros}`, {
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
//     history.replace(appRoutes.login);

//   } else {
//     //Guardar el array de logros en la variable que quieras dentro de sesión
//     sessionStorage.setItem('myAchievements', respuesta);
//   }
// } catch (e) {
//   setIsFetchingUser(false);
//   toast.error('Error del servidor. Por favor, inténtelo de nuevo');
// }

/*Llamada y control de errores del EP que marca un logro como realizado*/
async function apiAddAchievement(achievementInfo) {
  //El objeto que entra como parámetro debe incluir el id del logro como "id_logro" y la fecha como "date"
  return fetch(`${url.base}${url.addLogros}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
    body: JSON.stringify(achievementInfo),
  }).then(data => data.json());
}
// try {
//   setIsFetchingUser(true);
//   var respuesta = await apiAddAchievement(achievementInfo);
//   if (datos.message == 'success') {
//     toast.success('¡Enhorabuena peregrino! Has conseguido un nuevo logro');
//   }
//   if (respuesta.message == 'Expired token') {
//     toast.info(
//       'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
//     );
//    history.replace(appRoutes.login);

//   }
// } catch (e) {
//   setIsFetchingUser(false);
//   toast.error('Error del servidor. Por favor, inténtelo de nuevo');
// }

/*Llamada y control de errores del EP que resetea los logros del usuario*/
async function apiDeleteAchievements() {
  return fetch(`${url.base}${url.deleteLogros}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
    body: JSON.stringify(),
  }).then(data => data.json());
}
// try {
//   setIsFetchingUser(true);
//   var respuesta = await apiDeleteAchievement(id_logro);
//   if (datos.message == 'success') {
//     toast.info('Has eliminado el logro de tu lista');
//   }
//   if (respuesta.message == 'Expired token') {
//     toast.info(
//       'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
//     );
//    history.replace(appRoutes.login);

//   }
// } catch (e) {
//   setIsFetchingUser(false);
//   toast.error('Error del servidor. Por favor, inténtelo de nuevo');
// }
