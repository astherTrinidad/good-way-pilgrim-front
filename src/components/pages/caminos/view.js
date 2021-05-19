import React, { useState, useEffect } from 'react';
import _findIndex from 'lodash/findIndex';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
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
      const pathId = (userPath.camino = event.target.id);
      // console.log(`lalalla/caminos/#${item.id}`);
      setUserPath(pathId);
      console.log('path id: ' + pathId);
      const pathDate = (userPath.start_date = getCurrentDate());
      setUserPath(pathDate);
      console.log('path date:  ' + pathDate);
      const responseAddUserPath = await apiAddActivePath(userPath);
      if (responseAddUserPath.message === undefined) {
        setUserPath(responseAddUserPath);
      }
      if (responseAddUserPath.message === 'Expired token') {
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
          keyo={paths}
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

    return <CaminoEtapa key={paths} name={item.name} />;
  });

  const onClickCSV = async event => {
    event.preventDefault();
    try {
      const datos = await apiCsvDownload();

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
          <ColumnMenu>
            <DropMenu src={dropTop} alt="" />
            <RowCaminos tabIndex={0} aria-label="Caminos">
              <TextLink>Caminos</TextLink>
              <TextMenu to={`./#${renderPaths.id}`}>
                {renderPathsToSubmenu}
              </TextMenu>
              <TextLink>Camino actual</TextLink>
              <TextLink>Histórico de caminos</TextLink>
            </RowCaminos>
          </ColumnMenu>
          <ColumnCamino>
            <Row>
              <Section role="sección" tabIndex={0} title="Caminos">
                Caminos
              </Section>
            </Row>
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

async function apiAddActivePath(dataPath) {
  let response = await fetch(`${url.base}${url.addActivePath}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
    body: JSON.stringify(dataPath),
  });
  if (!response.ok) {
    if (response.status === 400) {
      toast.error('Error de servidor, inténtalo más tarde');
    }
    if (response.status === 422) {
      toast.error('Ya tienes un camino activo');
    }
  }
  let content = await response.text();
  return content;
}
