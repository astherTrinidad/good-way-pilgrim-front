import React, { useState, useEffect, useCallback } from 'react';
import  _  from 'lodash'
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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Logro = ({src, alt, tabIndex, name, description}) => {
  return <ContainerLogros>
    <LogroBN
      src={src}
      alt={alt}
      tabIndex={tabIndex}
    />
    <NameText tabIndex={tabIndex}>{name}</NameText>
    <DescriptionText tabIndex={tabIndex}>{description}</DescriptionText>
  </ContainerLogros>;
};

export default function MeLogros() {
  const history = useHistory();
  const [allLogros, setAllLogros] = useState([]);
  const [userLogros, setUserLogros] = useState([]);


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

  const renderLogros = allLogros?.map( (item) => {
    console.log(item)
    console.log(userLogros)

    // const idLogros = userLogros.find( (element) => {
    //   console.log('item.id' + item.id)
    //   console.log('element.id_logro' + element.id_logro)
    //   return  element.id_logro === item.id
    // })

    const idLogros = _.find(userLogros, (element) => {return element.id_logro === item.id});
  
     
    console.log(idLogros)

    
    return <Logro
    src={`./assets/logros/bn/${item.slug}.png`}
    name={item.name}
    description={item.description}
    />
  }) 


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

async function apiMyAchievements() {
  return fetch(`${url.base}${url.meLogros}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  }).then(data => data.json());
}