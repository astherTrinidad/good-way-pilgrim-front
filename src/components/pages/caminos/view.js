import React, { useState, useEffect } from 'react';
import _findIndex from 'lodash/findIndex';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import FileSaver from 'file-saver';
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
  TextDownload,
  ButtonSave,
  TextEtapa,
  TextMenu,
  TextLink,
  DropMenu,
} from './styled';
import { Camino, Etapa, CaminoEtapa } from '../../atoms';
import etapasPDF from '../../../assets/downloadPDF/etapasPDF.pdf';
import dropTop from '../../../assets/images/gota-user-profile.png';

export default function Caminos() {
  const history = useHistory();
  const [allCaminos, setCaminos] = useState([]);
  const [userPath, setUserPath] = useState({
    camino: '',
    start_date: '',
  });
  const [etapasCamino, setEtapasCamino] = useState([]);
  const getCurrentDate = () => {
    let addPathDate = new Date();
    let day =
      addPathDate.getDate() < 9
        ? '0' + addPathDate.getDate()
        : addPathDate.getDate();
    let month =
      addPathDate.getMonth() < 9
        ? '0' + addPathDate.getMonth()
        : addPathDate.getMonth();
    let year = addPathDate.getFullYear();
    return (addPathDate = year + '-' + month + '-' + day);
  };

  const onClickAddPath = async event => {
    event.preventDefault();
    try {
      var pathId = event.target.id;
      var pathDate = getCurrentDate();
      userPath.camino = pathId;
      userPath.start_date = pathDate;
      var responseAddUserPath = await apiAddActivePath(userPath);
      var respuesta = JSON.parse(responseAddUserPath);
      if (respuesta.message === 'success') {
        toast.success(
          'Camino añadido. Accede a la pestaña de camino activo para editar tus etapas'
        );
      } else {
        if (respuesta.message == 'User already has an active path') {
          toast.info(
            'Ya tienes un camino activo. Por favor, archívalo antes de añadir uno nuevo.'
          );
        } else if (respuesta.message == 'User already has this path') {
          toast.info(
            'Ya realizaste el camino. Por favor, selecciona uno nuevo o accede a tu histórico de caminos.'
          );
        }
        if (respuesta.message == 'Expired token') {
          history.replace(appRoutes.login);
          toast.info(
            'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
          );
          history.replace(appRoutes.login);
        }
      }
    } catch {
      toast.error(
        'Error del servidor. Por favor, cierra sesión y vuelve a entrar'
      );
    }
  };

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
    // console.log(`lalalla/caminos/#${item.id}`);

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
        />
        <ButtonSave
          id={item.id}
          type="button"
          value="add"
          name="Añadir camino"
          onClick={onClickAddPath}
        >
          Añadir camino
        </ButtonSave>
        <TextEtapa>Etapas</TextEtapa>
        <CaminoEtapa
          etapas={item.etapas.map((etapa, indexPaths) => {
            const indexEtapa =
              indexPaths < 9 ? '0' + (indexPaths + 1) : indexPaths + 1;
            return (
              <>
                <Etapa
                  key={indexPaths}
                  numEtapa={indexEtapa}
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
      </>
    );
  });

  const renderPathsToSubmenu = allCaminos.map((item, paths) => {
    // console.log(`/caminos/#${item.id}`);
    console.log('nombre: ' + allCaminos[paths].name);

    return (
      <CaminoEtapa
        href={`#${allCaminos[paths].id}`}
        key={paths}
        name={item.name}
      />
    );
  });

  const onClickCSV = async event => {
    try {
      let datos = await apiCsvDownload();
      const csvData = new Blob([datos], { type: 'text/csv;charset=utf-8;' });
      FileSaver.saveAs(csvData, 'GWP_caminos.csv');
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
          <ColumnMenu>
            <Section role="sección" tabIndex={0} title="Caminos">
              Caminos
            </Section>
            <DropMenu src={dropTop} alt="" />
            <RowCaminos tabIndex={0} aria-label="Caminos">
              <TextLink>Caminos</TextLink>
              <TextMenu>{renderPathsToSubmenu}</TextMenu>
              <TextLink href="/camino-actual">Camino actual</TextLink>
              <TextLink href="/historial-de-caminos">
                Historial de caminos
              </TextLink>
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
  }).then(response => response.text());
}

async function apiAddActivePath(dataPath) {
  let response = await fetch(`${url.base}${url.addActivePath}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
    body: JSON.stringify(dataPath),
  });

  let content = await response.text();
  return content;
}
