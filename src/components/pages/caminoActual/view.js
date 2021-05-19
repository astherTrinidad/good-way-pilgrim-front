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
  RowEtapas,
  TextDownload,
  RowCamino,
  ButtonSave,
  TextEtapa,
  TextMenu,
  TextLink,
  DropMenu,
  TextEmptyEtapas,
} from './styled';
import { ButtonTurquoise, Camino, CaminoEtapa, EtapaActual } from '../../atoms';
import dropTop from '../../../assets/images/gota-user-profile.png';
import pathBN from '../../../assets/images/etapaBN.png';
import pathColor from '../../../assets/images/etapaColor.png';

export default function Caminos() {
  const history = useHistory();
  const [allCaminos, setCaminos] = useState([]);
  const [archivePath, setArchivePath] = useState({
    camino: '',
  });
  const [activePath, setActivePath] = useState([]);
  const [etapas, setEtapas] = useState([]);
  const [userEtapas, setUserEtapas] = useState({
    camino: '',
    etapa: '',
  });
  const [userEtapasRealizadas, setUserEtapasRealizadas] = useState([]);
  const [isFetching, setIsfetching] = useState(false);
  const [finishPath, setFinishPath] = useState({
    camino: '',
    finish_date: '',
  });
  const onClickArchivePath = async event => {
    event.preventDefault();
    try {
      setIsfetching(true);

      const pathId = (archivePath.camino = event.target.id);
      const responseArchivePath = await apiArchivePath(archivePath);

      if (responseArchivePath.message === undefined) {
        setArchivePath(pathId);
      } else if (responseArchivePath.message === 'Expired token') {
        history.replace(appRoutes.login);
        toast.info(
          'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
        );
        history.replace(appRoutes.login);
      }
      pathId = '';
    } catch {
      toast.error(
        'Error del servidor. Por favor, cierra sesión y vuelve a entrar'
      );
      setIsfetching(false);
    }
  };

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await apiAllPaths();
        const responseActivePaths = await apiActivePath();
        const responseUserEtapasRealizadas = await apiEtapasRealizadas(
          responseActivePaths.id
        );

        if (response.message == 'Expired token') {
          toast.info(
            'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
          );
          history.replace(appRoutes.login);
        } else {
          setCaminos(response);
          setEtapas(responseActivePaths.etapas);
          setUserEtapasRealizadas(responseUserEtapasRealizadas);
          setActivePath(responseActivePaths);
        }
      } catch {
        toast.error(
          'Error del servidor. Por favor, cierra sesión y vuelve a entrar'
        );
      }
    }
    fetchProfile();
  }, []);

  const onClickAddEtapa = async event => {
    try {
      let pathId = (userEtapas.camino = activePath.id);
      let etapaId = (userEtapas.etapa = event.target.id);

      var responseAddEtapa = await apiAddEtapa(userEtapas);
      setUserEtapas(pathId);
      setUserEtapas(etapaId);
      setUserEtapas(userEtapas);

      console.log('response add ' + responseAddEtapa);
      var responseUserEtapasRealizadas = await apiEtapasRealizadas(
        userEtapas.camino
      );

      setUserEtapasRealizadas(responseUserEtapasRealizadas);

      if (responseAddEtapa.message == 'Expired token') {
        toast.info(
          'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
        );
        history.replace(appRoutes.login);
      }
    } catch (e) {
      toast.error('Error del servidor. Por favor, inténtelo de nuevo');
    }
  };

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

  const onClickFinishPath = async event => {
    event.preventDefault();
    try {
      setIsfetching(true);
      const pathId = (finishPath.camino = activePath.id);
      const etapaFinishDate = (finishPath.finish_date = getCurrentDate());

      setFinishPath(etapaFinishDate);
      setFinishPath(pathId);

      var response = await apiFinishPath(finishPath);
      if (response.message == 'success') {
        setFinishPath(response);
        toast.success('¡Enhorabuena peregrino! Has terminado el camino');
        setIsfetching(false);
      }
      if (response.message == 'Expired token') {
        toast.info(
          'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
        );
        history.replace(appRoutes.login);
      }
    } catch (e) {
      toast.error('Error del servidor. Por favor, inténtelo de nuevo');
      setIsfetching(false);
    }
  };

  const renderPathsToSubmenu = allCaminos.map((item, paths) => {
    // console.log(`/caminos/#${item.id}`);

    return <CaminoEtapa key={paths} name={item.name} />;
  });

  const renderPaths = etapas?.map((item, etapa) => {
    const idEtapa = _findIndex(userEtapasRealizadas, element => {
      return element.id === item.id;
    });
    const ruta = idEtapa !== -1 ? `${pathColor}` : `${pathBN}`;
    return (
      <EtapaActual
        id={item.id}
        src={ruta}
        alt={item.name}
        key={etapa}
        tabIndex={0}
        start={item.start}
        finish={item.finish}
        km={item.km}
        onClick={onClickAddEtapa}
      />
    );
  });

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Row>
          <ColumnMenu>
            <DropMenu src={dropTop} alt="" />
            <RowCamino tabIndex={0} aria-label="Caminos">
              <TextLink>Caminos</TextLink>
              <TextMenu to={`./#${renderPaths.id}`}>
                {renderPathsToSubmenu}
              </TextMenu>
              <TextLink>Camino actual</TextLink>
              <TextLink>Histórico de caminos</TextLink>
            </RowCamino>
          </ColumnMenu>
          <ColumnCamino>
            <Row>
              <Section role="sección" tabIndex={0} title="Camino Actual">
                Camino Actual
              </Section>
            </Row>
            {activePath ? (
              <>
                <RowCamino tabIndex={0} aria-label="Caminos">
                  <Camino
                    tabIndex={0}
                    id={activePath?.id}
                    name={activePath?.name}
                    start={activePath?.start}
                    finish={activePath?.finish}
                    num_etapas={activePath?.num_etapas}
                    description={activePath?.description}
                  />

                  <ButtonTurquoise
                    id={activePath?.id}
                    label="Archivar camino"
                    type="button"
                    value="archive"
                    onClick={onClickArchivePath}
                    isFetching={isFetching}
                  />
                </RowCamino>

                <RowEtapas>{renderPaths}</RowEtapas>
                <ButtonTurquoise
                  id={activePath?.id}
                  label="Terminar Camino"
                  type="button"
                  value="finish"
                  onClick={onClickFinishPath}
                  isFetching={isFetching}
                />
              </>
            ) : (
              <>
                <RowCamino tabIndex={0} aria-label="Caminos">
                  <TextEmptyEtapas>
                    ¡Ánimo! Seguro que estás listo para empezar un camino.
                  </TextEmptyEtapas>
                  <TextEmptyEtapas>
                    Ve a la lista de caminos, elige el que más te apetezca o el
                    que se ajuste a tus necesidades. Añádelo a tu perfil y ponte
                    las botas, no necesitas más!
                  </TextEmptyEtapas>
                </RowCamino>
              </>
            )}
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

async function apiActivePath() {
  return fetch(`${url.base}${url.activePath}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  }).then(data => data.json());
}

async function apiEtapasRealizadas(etapaPathId) {
  return fetch(`${url.base}${url.etapasRealizadas}?camino=${etapaPathId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  }).then(data => data.json());
}

async function apiArchivePath(pathId) {
  return fetch(`${url.base}${url.archivePath}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
    body: JSON.stringify(pathId),
  }).then(data => data.json());
}

async function apiAddEtapa(etapaInfo) {
  let response = await fetch(`${url.base}${url.addEtapa}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
    body: JSON.stringify(etapaInfo),
  });

  let content = await response.text();
  return content;
}

async function apiFinishPath(etapaInfo) {
  let response = await fetch(`${url.base}${url.finishPath}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
    body: JSON.stringify(etapaInfo),
  });

  let content = await response.text();
  return content;
}
