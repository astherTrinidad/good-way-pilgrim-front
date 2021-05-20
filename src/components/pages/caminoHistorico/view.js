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
import { ButtonTurquoise, Camino, CaminoEtapa, EtapaActual } from '../../atoms';
import dropTop from '../../../assets/images/gota-user-profile.png';
import PathsData from '../../molecules';

export default function CaminoHistorico() {
  const history = useHistory();
  const [allUserPath, setAllUserPath] = useState([]);
  const [allCaminos, setAllCaminos] = useState([]);
  const [reactivePath, setReactivePath] = useState({
    camino: '',
  });
  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await apiAllPaths();

        const responseAllUserPaths = await apiMyPaths();
        console.log('response user' + responseAllUserPaths.message);

        if (
          response.message == 'Expired token' ||
          responseAllUserPaths.message
        ) {
          toast.info(
            'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
          );
          history.replace(appRoutes.login);
        } else {
          setAllCaminos(response);
          setAllUserPath(responseAllUserPaths);
        }
      } catch {
        toast.error(
          'Error del servidor. Por favor, cierra sesión y vuelve a entrar'
        );
      }
    }
    fetchProfile();
  }, []);

  const onClickReactive = async event => {
    event.preventDefault();
    try {
      reactivePath.camino = event.target.id;
      const responseReactive = await apiReactivePath(reactivePath);
      console.log(responseReactive);
      setReactivePath(responseReactive);
      const responseAllUserPaths = await apiMyPaths();

      if (responseReactive.message == 'User already has an active path') {
        toast.info(
          'Ya tienes un camino activo. Archívalo o termínalo antes de activar este'
        );
      }

      if (
        responseReactive.message == 'Expired token' ||
        responseAllUserPaths.message
      ) {
        toast.info(
          'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
        );
        history.replace(appRoutes.login);
      }
    } catch (e) {
      toast.error(
        'Error del servidor. Por favor, cierra sesión y vuelve a entrar'
      );
    }
  };

  const renderPathsToSubmenu = allCaminos.map((item, paths) => {
    // console.log(`/caminos/#${item.id}`);

    return <CaminoEtapa key={paths} name={item.name} />;
  });

  const renderUserPaths = allUserPath.map((item, paths) => {
    return (
      <>
        <PathsData
          key={paths}
          id={item.id}
          name={item.name}
          status={item.status}
          start_date={item.start_date}
          finish_date={item.finish_date}
          etapas={item.etapas}
        />
        {item.status !== 'Completed' ? (
          <ButtonTurquoise
            id={item.id}
            label="Reactivar"
            value="reactive"
            onClick={onClickReactive}
          />
        ) : (
          <></>
        )}
      </>
    );
  });

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Row>
          <ColumnMenu>
            <Section role="sección" tabIndex={0} title="Histórico de caminos">
              Historial de caminos
            </Section>
            <DropMenu src={dropTop} alt="" />
            <RowCamino tabIndex={0} aria-label="Caminos">
              <TextLink>Caminos</TextLink>
              <TextMenu>{renderPathsToSubmenu}</TextMenu>
              <TextLink>Camino actual</TextLink>
              <TextLink>Histórico de caminos</TextLink>
            </RowCamino>
          </ColumnMenu>
          <ColumnCamino>
            <RowCamino tabIndex={0} aria-label="Caminos">
              <TextWrapper>
                <Heading
                  aria-label="¿No recuerdas que caminos realizaste?"
                  tabIndex="0"
                >
                  ¿No recuerdas que caminos realizaste?
                </Heading>
                <Subtitle
                  aria-label="Puedes recordar los caminos que marcaste como terminados o
                  retomar caminos archivados. Para esto último sólo tienes que
                  elegir el camino deseado y pulsar en el botón de Reactivar."
                  tabIndex="0"
                >
                  ¿No recuerdas que caminos realizaste? Puedes recordar los
                  caminos que marcaste como terminados o retomar caminos
                  archivados. Para esto último sólo tienes que elegir el camino
                  deseado y pulsar en el botón de Reactivar.
                </Subtitle>
                <Subtitle
                  aria-label="No
                  olvides revisar que no tengas ningún camino activo."
                  tabIndex="0"
                >
                  No olvides revisar que no tengas ningún camino activo.
                </Subtitle>
              </TextWrapper>
            </RowCamino>

            {renderUserPaths}
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

async function apiMyPaths() {
  return fetch(`${url.base}${url.myPaths}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  }).then(data => data.json());
}

async function apiReactivePath(pathInfo) {
  return fetch(`${url.base}${url.reactivePath}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
    body: JSON.stringify(pathInfo),
  }).then(data => data.json());
}
