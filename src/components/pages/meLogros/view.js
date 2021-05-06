import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
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
  NameText,
  ContainerLogros,
  DescriptionText,
} from './styled';
import DeleteLogros from '../../modals/deleteLogros';
import logroBN from '../../../assets/images/logros/bn/el-casanova.png';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function MeLogros() {
  const history = useHistory();
  const [userLogros, setUserLogros] = useState({});

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await apiAllAchievements();
        if (response.message == 'Expired token') {
          toast.info(
            'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
          );
          history.replace(appRoutes.login);
        } else {
          setUserLogros(response);
        }
      } catch {
        toast.error(
          'Error del servidor. Por favor, cierra sesión y vuelve a entrar'
        );
      }
    }
    fetchProfile();
  }, []);

  const handleChange = event => {
    setUserLogros({
      ...userLogros,
      [event.target.picture]: event.target.value,
    });
  };

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
          <Section role="sección" tabIndex={0}>
            Logros
          </Section>
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
          <ContainerLogros>
            <LogroBN
              src={logroBN}
              alt="logro bn"
              aria-label="nombre logro"
              tabIndex={0}
              onChange={handleChange}
            />
            <NameText tabIndex={0}>{userLogros[0].name}</NameText>
            <DescriptionText tabIndex={0}>
              {userLogros[0].description}
            </DescriptionText>
          </ContainerLogros>

          {/* <LogroColor
            src=""
            alt="logro color"
            aria-label="nombre logro"
            tabIndex={0}
          /> */}
        </RowLogros>
        <Row>
          <Section role="sección" tabIndex={0}>
            AntiLogros
          </Section>
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
  return fetch(`${url.base}/pri/AllAchievements`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  }).then(data => data.json());
}
