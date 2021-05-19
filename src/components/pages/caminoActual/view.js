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
} from './styled';
import { Camino, Etapa, CaminoEtapa, EtapaActual } from '../../atoms';
import etapasPDF from '../../../assets/downloadPDF/etapasPDF.pdf';
import dropTop from '../../../assets/images/gota-user-profile.png';
import photoEtapa from '../../../assets/images/etapaBN.png';
import { act } from 'react-dom/test-utils';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

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
  });

  const onClickArchivePath = async event => {
    event.preventDefault();
    try {
      const pathId = (archivePath.camino = event.target.id);
      console.log('ID CAMINO ACTUAL: ' + pathId);
      const responseArchivePath = await apiArchivePath(archivePath);
      setActivePath(null);
      if (responseArchivePath.message === undefined) {
        setArchivePath(pathId);
        console.log(JSON.stringify('archive: ' + pathId));
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
        const responseAllPaths = await apiAllPaths();
        if (responseAllPaths.message === undefined) {
          setCaminos(responseAllPaths);
        }

        const responseActivePaths = await apiActivePath();
        console.log('id use effect actual: ' + responseActivePaths.id);
        console.log('nombre ' + responseActivePaths.name);
        if (responseActivePaths.message === undefined) {
          setActivePath(responseActivePaths);
          setEtapas(responseActivePaths.etapas);
        }
        if (responseActivePaths.message == 'Expired token') {
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

  const renderPaths = etapas.map((item, etapa) => {
    // console.log(`lalalla/caminos/#${item.id}`);

    return (
      <EtapaActual
        src={photoEtapa}
        alt={item.name}
        key={etapa}
        tabIndex={0}
        start={item.start}
        finish={item.finish}
        km={item.km}
        // onClick={onClick}
      />
    );
  });
  const renderPathsToSubmenu = allCaminos.map((item, paths) => {
    // console.log(`/caminos/#${item.id}`);

    return <CaminoEtapa key={paths} name={item.name} />;
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

            <RowCamino tabIndex={0} aria-label="Caminos">
              <Camino
                tabIndex={0}
                id={activePath?.id}
                name={activePath?.name}
                start={activePath?.start}
                finish={activePath?.finish}
                num_etapas={activePath?.num_etapas}
                km={activePath?.km}
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
  return fetch(`${url.base}${url.etapasRealizadas}`, {
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
