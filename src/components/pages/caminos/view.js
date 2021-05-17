import React, { useState, useEffect } from 'react';
import _findIndex from 'lodash/findIndex';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import Slide from '@material-ui/core/Slide';
import { Navbar, Footer, AsideCaminos } from '../../organisms';
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
  TextDownload,
} from './styled';
import { Camino, Logro } from '../../atoms';
import etapasPDF from '../../../assets/downloadPDF/etapasPDF.pdf';
import { TextCamino } from '../../atoms/camino/styled';
import Button from '../../atoms/button';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Caminos() {
  const history = useHistory();
  const [allCaminos, setCaminos] = useState([]);
  const [userData, setUserData] = useState({});
  const [etapasCamino, setEtapasCamino] = useState([]);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const responseAllPaths = await apiAllPaths();

        if (responseAllPaths.message === undefined) {
          setCaminos(responseAllPaths);
          setEtapasCamino(responseAllPaths.etapas);
        }

        if (responseAllPaths.message == 'Expired token') {
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

  const renderPaths = allCaminos.map((item, paths) => {
    return (
      <>
        <Camino
          key={paths}
          tabIndex={0}
          id={item.id}
          name={item.name}
          start={item.start}
          finish={item.finish}
          num_etapas={item.num_etapas}
          km={item.km}
          description={item.description}
          etapas={item.etapas.map((etapa, paths) => {
            return (
              <>
                <Camino
                  key={paths}
                  tabIndex={0}
                  start={etapa.start}
                  finish={etapa.finish}
                  km={etapa.km}
                  description={etapa.description}
                />
              </>
            );
          })}
        />
        <Button type="button" value="add" name="Añadir camino">
          Añadir camino
        </Button>
      </>
    );
  });
  const renderPathsToSubmenu = allCaminos.map((item, paths) => {
    return <Camino key={paths} name={item.name} />;
  });

  const onClickCSV = async event => {
    event.preventDefault();
    try {
      const datos = await apiCsvDownload();
      if (datos.message === undefined) {
        setUserData(datos);
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
  };

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
          <ColumnMenu>
            <RowCaminos tabIndex={0} aria-label="Caminos">
              {renderPathsToSubmenu}
            </RowCaminos>
          </ColumnMenu>
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
                  Puedes descargárte toda la información de los caminos y de las
                  etapas seleccionando en los siguientes enlaces.
                </Subtitle>
                <Row>
                  <TextDownload
                    tabIndex="Descargar csv caminos"
                    onClick={onClickCSV}
                  >
                    Descargar csv caminos
                  </TextDownload>
                  <TextDownload
                    tabIndex="Descargar pdf etapas"
                    href={etapasPDF}
                    download
                  >
                    Descargar pdf etapas
                  </TextDownload>
                </Row>
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

async function apiCsvDownload() {
  return fetch(`${url.base}${url.csvDownload}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  }).then(data => data.json());
}
