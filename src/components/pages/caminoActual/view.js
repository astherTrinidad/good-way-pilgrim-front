import React, { useState, useEffect } from "react";
import _findIndex from "lodash/findIndex";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import { Navbar, Footer } from "../../organisms";
import appRoutes from "../../../config/appRoutes";
import GlobalStyle from "../../../globalStyles";
import url from "../../../config/url";

import { ConfirmFinishPath } from "../../modals";

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
  RowCamino,
  ButtonSave,
  TextMenu,
  TextLink,
  DropMenu,
  TextEmptyEtapas,
  Illustration,
  IllustrationContainer,
} from "./styled";
import { ButtonGreen, Camino, CaminoEtapa, EtapaActual } from "../../atoms";
import dropWomanBoots from "../../../assets/images/gota-camino-actual.png";
import illustrationWalk from "../../../assets/images/camino-actual-walk.svg";
import pathBN from "../../../assets/images/etapaBN.png";
import pathColor from "../../../assets/images/etapaColor.png";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function Caminos() {
  const history = useHistory();
  const [allCaminos, setCaminos] = useState([]);
  const [archivePath, setArchivePath] = useState({
    camino: "",
  });
  const [activePath, setActivePath] = useState([]);
  const [etapas, setEtapas] = useState([]);
  const [userEtapas, setUserEtapas] = useState({
    camino: "",
    etapa: "",
  });
  const [userEtapasRealizadas, setUserEtapasRealizadas] = useState([]);
  const [isFetching, setIsfetching] = useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpenModalDelete = () => {
    setOpen(true);
  };

  const handleCloseModalDelete = () => {
    setOpen(false);
  };

  const onClickArchivePath = async (event) => {
    event.preventDefault();
    try {
      setIsfetching(true);
      archivePath.camino = event.target.id;
      setArchivePath(archivePath.camino);

      const responseArchivePath = await apiArchivePath(archivePath);

      if (responseArchivePath.message === "success") {
        toast.success("??Camino archivado!");
      } else if (responseArchivePath.message === "Expired token") {
        history.replace(appRoutes.login);
        toast.info(
          "Por seguridad tu sesi??n ha expirado. Por favor, vuelve a introducir tus datos"
        );
        sessionStorage.removeItem("token");
        history.replace(appRoutes.login);
      }

      history.replace(appRoutes.caminos);
    } catch {
      console.log(
        "Error del servidor. Por favor, cierra sesi??n y vuelve a entrar"
      );
      setIsfetching(false);
    }
  };

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await apiAllPaths();
        const responseActivePaths = await apiActivePath();

        if (response.message === undefined) {
          setCaminos(response);
        }
        if (responseActivePaths.message !== "User hasnt got an active path") {
          const responseUserEtapasRealizadas = await apiEtapasRealizadas(
            responseActivePaths.id
          );
          setEtapas(responseActivePaths.etapas);
          setActivePath(responseActivePaths);
          setUserEtapasRealizadas(responseUserEtapasRealizadas);
        } else if (response.message === "Expired token") {
          toast.info(
            "Por seguridad tu sesi??n ha expirado. Por favor, vuelve a introducir tus datos"
          );
          sessionStorage.removeItem("token");
          history.replace(appRoutes.login);
        }
      } catch {
        console.log(
          "Error del servidor. Por favor, cierra sesi??n y vuelve a entrar"
        );
      }
    }
    fetchProfile();
  }, []);

  const onClickAddEtapa = async (event) => {
    try {
      let pathId = (userEtapas.camino = activePath.id);
      let etapaId = (userEtapas.etapa = event.target.id);

      var responseAddEtapa = await apiAddEtapa(userEtapas);
      setUserEtapas(pathId);
      setUserEtapas(etapaId);
      setUserEtapas(userEtapas);

      var responseUserEtapasRealizadas = await apiEtapasRealizadas(
        userEtapas.camino
      );

      setUserEtapasRealizadas(responseUserEtapasRealizadas);

      if (responseAddEtapa.message === "Expired token") {
        toast.info(
          "Por seguridad tu sesi??n ha expirado. Por favor, vuelve a introducir tus datos"
        );
        sessionStorage.removeItem("token");
        history.replace(appRoutes.login);
      }
    } catch (e) {
      console.log("Error del servidor. Por favor, int??ntelo de nuevo");
    }
  };
  const renderPathsToSubmenu = allCaminos.map((item, paths) => {
    return <CaminoEtapa key={paths} name={item.name} />;
  });

  const renderPaths = etapas?.map((item, etapa) => {
    const idEtapa = _findIndex(userEtapasRealizadas, (element) => {
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
            <Section role="secci??n" tabIndex={0} title="Camino Actual">
              Camino Actual
            </Section>
            <DropMenu src={dropWomanBoots} alt="Mujer con botas de monta??a " />
            <RowCamino tabIndex={0} aria-label="Caminos">
              <TextLink href="/caminos">Caminos</TextLink>
              <TextMenu>{renderPathsToSubmenu}</TextMenu>
              <TextLink>Camino actual</TextLink>
              <TextLink href="/historial-de-caminos">
                Historial de caminos
              </TextLink>
            </RowCamino>
          </ColumnMenu>
          <ColumnCamino>
            {activePath.length !== 0 ? (
              <>
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
                    label="Archivar camino"
                    type="button"
                    value="archive"
                    onClick={onClickArchivePath}
                    isFetching={isFetching}
                  >
                    Archivar camino
                  </ButtonSave>
                </RowCamino>

                <RowEtapas>{renderPaths}</RowEtapas>
                <ButtonGreen
                  id={activePath?.id}
                  label="Terminar Camino"
                  type="button"
                  value="finish"
                  onClick={handleClickOpenModalDelete}
                  isFetching={isFetching}
                />

                <Dialog
                  open={open}
                  TransitionComponent={Transition}
                  keepMounted
                  onClick={handleCloseModalDelete}
                  aria-labelledby="??Genial, terminaste el camino!"
                  aria-describedby="Modal de confirmaci??n terminar camino"
                  aria-modal="true"
                  role="dialog"
                  maxWidth="md"
                >
                  <ConfirmFinishPath />
                </Dialog>
              </>
            ) : (
              <>
                <RowCamino tabIndex={0} aria-label="Caminos">
                  <TextEmptyEtapas />
                  <TextWrapper>
                    <Heading
                      aria-label="????nimo! Seguro que est??s listo para empezar un camino."
                      tabIndex="0"
                    >
                      ????nimo! Seguro que est??s listo para empezar un camino.
                    </Heading>
                    <Subtitle
                      aria-label="Ve a la lista de caminos, elige el que m??s te apetezca o el
                  que se ajuste a tus necesidades. A????delo a tu perfil y ponte
                  las botas, no necesitas m??s!"
                      tabIndex="0"
                    >
                      Ve a la lista de caminos, elige el que m??s te apetezca o
                      el que se ajuste a tus necesidades. A????delo a tu perfil y
                      ponte las botas, no necesitas m??s!
                    </Subtitle>
                  </TextWrapper>
                </RowCamino>
                <RowCamino>
                  <IllustrationContainer>
                    <Illustration
                      src={illustrationWalk}
                      alt="Peregrino andando en invierno"
                      title="Peregrino abrigado andando en invierno"
                    />
                  </IllustrationContainer>
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
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  }).then((data) => data.json());
}

async function apiActivePath() {
  return fetch(`${url.base}${url.activePath}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  }).then((data) => data.json());
}

async function apiEtapasRealizadas(etapaPathId) {
  return fetch(`${url.base}${url.etapasRealizadas}?camino=${etapaPathId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  }).then((data) => data.json());
}

async function apiArchivePath(pathId) {
  return fetch(`${url.base}${url.archivePath}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
    body: JSON.stringify(pathId),
  }).then((data) => data.json());
}

async function apiAddEtapa(etapaInfo) {
  let response = await fetch(`${url.base}${url.addEtapa}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
    body: JSON.stringify(etapaInfo),
  });

  let content = await response.text();
  return content;
}
