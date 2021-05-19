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

export default function CaminoHistorico() {
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
        }
      } catch {
        toast.error(
          'Error del servidor. Por favor, cierra sesión y vuelve a entrar'
        );
      }
    }
    fetchProfile();
  }, []);

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
              <TextMenu>{renderPathsToSubmenu}</TextMenu>
              <TextLink>Camino actual</TextLink>
              <TextLink>Histórico de caminos</TextLink>
            </RowCamino>
          </ColumnMenu>
          <ColumnCamino>
            <Row>
              <Section role="sección" tabIndex={0} title="Histórico de caminos">
                Histórico de caminos
              </Section>
            </Row>
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
