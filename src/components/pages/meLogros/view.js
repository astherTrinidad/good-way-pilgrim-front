import React, { useState, useEffect } from 'react';
import _findIndex from 'lodash/findIndex';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { Navbar, Footer } from '../../organisms';
import appRoutes from '../../../config/appRoutes';
import GlobalStyle from '../../../globalStyles';
import url from '../../../config/url';
import {
  Container,
  Section,
  Row,
  LogroImg,
  RowLogros,
  TextWrapper,
  Heading,
  Subtitle,
  ButtonDelete,
  NameText,
  ContainerLogros,
  DescriptionText,
} from './styled';
import { DeleteAchievements, ConfirmAddAchievement } from '../../modals';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Logro = ({ src, alt, tabIndex, name, description, onClick }) => {
  return (
    <ContainerLogros onClick={onClick}>
      <LogroImg src={src} alt={alt} tabIndex={tabIndex} />
      <NameText tabIndex={tabIndex}>{name}</NameText>
      <DescriptionText tabIndex={tabIndex}>{description}</DescriptionText>
    </ContainerLogros>
  );
};

export default function MeLogros() {
  const history = useHistory();
  const [allLogros, setAllLogros] = useState([]);
  const [userLogros, setUserLogros] = useState([]);

  const [open, setOpen] = React.useState(false);
  const [openAddModal, setOpenAddModal] = React.useState(false);

  const handleClickOpenModalDelete = () => {
    setOpen(true);
  };

  const handleCloseModalDelete = () => {
    setOpen(false);
  };

  const handleClickCloseModalAdd = () => {
    setOpenAddModal(false);
    console.log('enHandle');
  };

  const onClick = () => {
    setOpenAddModal(true);
  };

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await apiAllAchievements();
        const myAchievementsResponse = await apiMyAchievements();
        if (response.message == 'Expired token') {
          toast.info(
            'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
          );
          history.replace(appRoutes.login);
        } else {
          setAllLogros(response);
          setUserLogros(myAchievementsResponse);
        }
      } catch {
        toast.error(
          'Error del servidor. Por favor, cierra sesión y vuelve a entrar'
        );
      }
    }
    fetchProfile();
  }, []);

  const renderLogros = allLogros?.slice(0, 10)?.map(item => {
    const idLogros = _findIndex(userLogros, element => {
      return element.id_logro === item.id;
    });
    const ruta =
      idLogros !== -1 ? './assets/logros/color/' : './assets/logros/bn/';
    return (
      <Logro
        src={`${ruta}${item.slug}.png`}
        name={item.name}
        description={item.description}
        alt={item.name}
        tabIndex={0}
        onClick={onClick}
      />
    );
  });

  const renderAntiLogros = allLogros?.slice(10, 20)?.map(item => {
    const idLogros = _findIndex(userLogros, element => {
      return element.id_logro === item.id;
    });
    const ruta =
      idLogros !== -1 ? './assets/logros/color/' : './assets/logros/bn/';

    return (
      <Logro
        src={`${ruta}${item.slug}.png`}
        name={item.name}
        description={item.description}
        alt={item.name}
        tabIndex={0}
        onClick={onClick}
      />
    );
  });

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
              conseguidos, para ello pulsa en la imagen y quedará registrado en
              tu perfil
            </Subtitle>
          </TextWrapper>
        </Row>
        <RowLogros tabIndex={0} aria-label="Logros">
          {renderLogros}
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
          {renderAntiLogros}
        </RowLogros>
        <ButtonDelete
          label="Resetear logros"
          name="Resetear logros"
          id="delete"
          type="button"
          onClick={handleClickOpenModalDelete}
          button-label="Resetear logros"
        >
          Resetear logros
        </ButtonDelete>
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClick={handleCloseModalDelete}
          aria-labelledby="¿Empezamos de cero?"
          aria-describedby="Modal de confirmación resetear logros"
          aria-modal="true"
          role="dialog"
          maxWidth="md"
        >
          <DeleteAchievements />
        </Dialog>
        <Dialog
          open={openAddModal}
          TransitionComponent={Transition}
          keepMounted
          onClick={handleClickCloseModalAdd}
          aria-labelledby="¡Enhorabuena por conseguirlo!"
          aria-describedby="¿Quiéres añadir el logro?"
          aria-modal="true"
          role="dialog"
        >
          <ConfirmAddAchievement />
        </Dialog>
      </Container>
      <Footer />
    </>
  );
}

async function apiAllAchievements() {
  return fetch(`${url.base}/pri/AllAchievements`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  }).then(data => data.json());
}

async function apiMyAchievements() {
  return fetch(`${url.base}${url.meLogros}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  }).then(data => data.json());
}
