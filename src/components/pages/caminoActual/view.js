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
import { Camino, CaminoEtapa, EtapaActual } from '../../atoms';
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

  const onClickArchivePath = async event => {
    event.preventDefault();
    try {
      const pathId = (archivePath.camino = event.target.id);
      const responseArchivePath = await apiArchivePath(archivePath);
      setActivePath(null);

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

        if (response.message === undefined) {
          setCaminos(response);
          setEtapas(responseActivePaths.etapas);
          setUserEtapasRealizadas(responseUserEtapasRealizadas);
          setActivePath(responseActivePaths);
        }

        if (response.message == 'Expired token') {
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

  const onClickAddEtapa = async event => {
    event.preventDefault();
    try {
      const pathId = (userEtapas.camino = archivePath);
      let onClickIdEtapa = (etapas = event.target.id);
      setUserEtapas(pathId);
      setUserEtapas(onClickIdEtapa);
    } catch (e) {
      toast.error('Error del servidor. Por favor, inténtelo de nuevo');
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
                  <ButtonSave
                    id={activePath?.id}
                    type="button"
                    value="add"
                    name="Archivar camino"
                    onClick={onClickArchivePath}
                  >
                    Archivar camino
                  </ButtonSave>
                </RowCamino>

                <RowEtapas>{renderPaths}</RowEtapas>
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
