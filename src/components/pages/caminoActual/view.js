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

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Caminos() {
  const history = useHistory();
  const [allCaminos, setCaminos] = useState([]);
  const [userPath, setUserPath] = useState({
    camino: '',
  });
  const [etapasCamino, setEtapasCamino] = useState([]);

  const onClickArchivePath = async event => {
    event.preventDefault();
    try {
      const pathId = (userPath.camino = event.target.id);
      setUserPath(pathId);
      console.log('path id: ' + pathId);

      const responseAddUserPath = await apiArchivePath(userPath);
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
          name="Archivar camino"
          onClick={onClickArchivePath}
        >
          Archivar camino
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
          <Section role="sección" tabIndex={0} title="Camino Actual">
              Camino Actual
            </Section>
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
