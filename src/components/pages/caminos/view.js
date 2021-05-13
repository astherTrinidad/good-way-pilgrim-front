import React, { useState, useEffect } from 'react';
import _findIndex from 'lodash/findIndex';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Slide from '@material-ui/core/Slide';
import { Navbar, Footer } from '../../organisms';
import appRoutes from '../../../config/appRoutes';
import GlobalStyle from '../../../globalStyles';
import url from '../../../config/url';
import {
  Container,
  Section,
  Row,
  TextWrapper,
  Heading,
  Subtitle,
  ColumnMenu,
  ColumnCamino,
  RowCaminos,
} from './styled';
import { Camino } from '../../atoms';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Caminos() {
  const history = useHistory();
  const [allCaminos, setCaminos] = useState([]);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await apiAllPaths();
        if (response.message == 'Expired token') {
          toast.info(
            'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
          );
          history.replace(appRoutes.login);
        } else {
          setCaminos(response);
          console.log('start' + response[0].start);
        }
      } catch {
        toast.error(
          'Error del servidor. Por favor, cierra sesión y vuelve a entrar'
        );
      }
    }
    fetchProfile();
  }, []);

  const renderPaths = allCaminos.map((item, paths) => {
    return (
      <Camino
        key={paths}
        tabIndex={0}
        id={item.id}
        src=""
        alt={item.name}
        name={item.name}
        start={`Origen: ${item.start}`}
        finish={`Destino: ${item.finish}`}
        num_etapas={`Número total de etapas: ${item.num_etapas}`}
        km={`Kilómetros: ${item.km}`}
        description={item.description}
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
            Caminos
          </Section>
        </Row>

        <Row>
          <ColumnMenu>Hola</ColumnMenu>
          <ColumnCamino>
            <Row>
              <TextWrapper>
                <Heading
                  aria-label="Olvídate del tiempo y simplemente camina"
                  tabIndex="0"
                >
                  Olvídate del tiempo y simplemente camina
                </Heading>
                <Subtitle
                  aria-label="Emprende el camino y al final del día selecciona 
              los logros conseguidos"
                  tabIndex="0"
                >
                  Puedes descargárte toda la información de los caminos en el
                  siguiente enlace.
                </Subtitle>
              </TextWrapper>
            </Row>
            <RowCaminos tabIndex={0} aria-label="Caminos">
              {renderPaths}
            </RowCaminos>
          </ColumnCamino>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

async function apiAllPaths() {
  return fetch(`${url.base}${url.caminos}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  }).then(data => data.json());
}
