import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import _findIndex from "lodash/findIndex";
import { Navbar, Footer, Slider } from "../../organisms";
import { SlideData } from "../../organisms/slider/slideData";
import appRoutes from "../../../config/appRoutes";
import url from "../../../config/url";
import { toast } from "react-toastify";
import GlobalStyle from "../../../globalStyles";
import {
  Container,
  Row,
  Section,
  TextWrapper,
  Heading,
  Subtitle,
  ColumnImg,
  Img,
  ConchaIcon,
  TextWrapperWithoutBackpacks,
  NumberStep,
  ArrowStep,
  TextStep,
  ContainerList,
} from "./styled";
import Cards from "../../molecules/cards";
import CardsSmall from "../../molecules/cardsSmall";
import BackpackItemList from "../../molecules/backpackForm/BackpackItemList";
import dropBackpacks from "../../../assets/images/drop-backpacks.png";
import conchaIcon from "../../../assets/images/conchaTurquoise.png";

const MeBackpacks = () => {
  const [allCaminos, setCaminos] = useState([]);
  const history = useHistory();
  const [userBackpacks, setUserBackpacks] = useState([]);
  const [infoBackpack, setInfoBackpack] = useState([]);
  const [pathId, setPathId] = useState({
    camino: "",
  });
  const [newBackpack, setNewBackpack] = useState(false); //confirmar que ha seleccionado una tarjeta
  const [showBackpack, setShowBackpack] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const responseAllPaths = await apiAllPaths();
        const responseMyBackpacks = await apiMyBackpacks();
        setUserBackpacks(responseMyBackpacks);
        setCaminos(responseAllPaths);

        if (
          responseAllPaths.message === "Expired token" ||
          responseMyBackpacks.message === "Expired token"
        ) {
          toast.info(
            "Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos"
          );
          history.replace(appRoutes.login);
        }
      } catch {
        console.log(
          "Error del servidor. Por favor, cierra sesión y vuelve a entrar"
        );
      }
    }
    fetchProfile();
  }, []);

  const handleShowInfoBackpack = async (event) => {
    console.log("******" + event.target.id);

    event.preventDefault();
    try {
      const responseInfo = await apiInfoBackpack(event.target.id);
      if (responseInfo !== "Incorrect data recived") {
        setInfoBackpack(responseInfo);
        setShowBackpack(true);

        console.log("show: " + showBackpack);
      }
      if (responseInfo.message === "Expired token") {
        toast.info(
          "Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos"
        );
        history.replace(appRoutes.login);
      }
    } catch (e) {
      console.log("Error del servidor. Por favor, inténtelo de nuevo");
    }
  };

  const handleCreateBackpack = async (event) => {
    console.log("******" + event.target.id);
    event.preventDefault();
    try {
      pathId.camino = event.target.id;
      setPathId(pathId);
      let responseCreateBackpack = await apiCreateBackpack(pathId);

      const responseMyBackpacks = await apiMyBackpacks();
      setUserBackpacks(responseMyBackpacks);
      setNewBackpack(true);

      let response = JSON.parse(responseCreateBackpack);
      console.log("parse" + response.message);

      if (response.message === "success") {
        toast.success("¡Mochila creada!");
      }

      if (
        responseMyBackpacks.message === "Expired token" ||
        response.message === "Expired token"
      ) {
        toast.info(
          "Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos"
        );
        history.replace(appRoutes.login);
      }
    } catch (e) {
      console.log("Error del servidor. Por favor, inténtelo de nuevo");
    }
  };

  const deleteBackpack = async (event) => {
    event.preventDefault();
    try {
      pathId.camino = event.target.id;
      console.log("path id camino create: " + pathId.camino);
      const responseDeleteBackpack = await apiDeleteBackpack(pathId);
      const responseMyBackpacks = await apiMyBackpacks();

      if (responseDeleteBackpack.message === "success") {
        setUserBackpacks(responseMyBackpacks);
        toast.success("Mochila eliminada");
      }
      if (responseDeleteBackpack.message === "Expired token") {
        toast.info(
          "Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos"
        );
        history.replace(appRoutes.login);
      }
    } catch (e) {
      console.log("Error del servidor. Por favor, inténtelo de nuevo");
    }
  };

  const renderAllCaminos = allCaminos.map((item, index) => {
    console.log(item.id);

    const idCamino = _findIndex(MeBackpacks, (element) => {
      return element.id === item.id;
    });

    const ruta = idCamino === -1 && "./assets/caminos/";
    return (
      <>
        <CardsSmall
          key={index}
          id={item.id}
          src={`${ruta}${item.slug}.png`}
          name={item.name}
          onClick={handleCreateBackpack}
        />
      </>
    );
  });

  const renderUserBackpacks = userBackpacks.map((item, index) => {
    const idCamino = _findIndex(MeBackpacks, (element) => {
      return element.id === item.id;
    });
    const ruta = idCamino === -1 && "./assets/caminos/";
    return (
      <>
        <Cards
          key={index}
          id={item.id}
          src={`${ruta}${item.slug}.png`}
          name={item.name}
          quantity={item.numObjects}
          onClick={handleShowInfoBackpack}
        />
      </>
    );
  });

  const renderInfoBackpack = infoBackpack.map((item, index) => {
    return (
      <>
        <p key={index}>
          {item.quantity}
          <span> {item.object}</span>
        </p>
      </>
    );
  });

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Row title="Mochila">
          <Section role="sección" tabIndex={0}>
            Mochila
          </Section>
        </Row>

        <Row>
          <TextWrapper>
            <Heading
              aria-label="En este apartado se muestran tus mochilas creadas"
              tabIndex="0"
            >
              ¡No te olvides de nada!
            </Heading>
            <Subtitle
              aria-label="Configura tu mochila para este camino, simplemente indica la
              cantidad y el objeto, puedes añadir, editar y eliminar todo
              aquello que creas necesario. Una vez lo tengas guardado en tu
              mochila, puedes tacharlo de la lista."
              tabIndex="0"
            >
              Configura tu mochila para este camino, simplemente indica la
              cantidad y el objeto, puedes añadir, editar y eliminar todo
              aquello que creas necesario. Una vez lo tengas guardado en tu
              mochila, puedes tacharlo de la lista.
            </Subtitle>
          </TextWrapper>
        </Row>

        <Row>{renderUserBackpacks}</Row>
        {renderInfoBackpack}

        <Row>
          <ContainerList className="backpack-app">
            <BackpackItemList />
          </ContainerList>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default MeBackpacks;

async function apiAllPaths() {
  return fetch(`${url.base}${url.caminos}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  }).then((data) => data.json());
}

async function apiMyBackpacks() {
  return fetch(`${url.base}${url.myBackpacks}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  }).then((data) => data.json());
}

async function apiInfoBackpack(pathId) {
  return fetch(`${url.base}${url.infoBackpack}?camino=${pathId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  }).then((data) => data.json());
}

async function apiDeleteBackpack(deletePathInfo) {
  return fetch(`${url.base}${url.deleteBackpack}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
    body: JSON.stringify(deletePathInfo),
  }).then((data) => data.json());
}

async function apiCreateBackpack(pathId) {
  let response = await fetch(`${url.base}${url.createBackpack}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
    body: JSON.stringify(pathId),
  });
  if (!response.ok) {
    if (response.status === 400) {
      toast.error("Datos incorrectos");
    }
    if (response.status === 422) {
      toast.error(
        "¡Error! Agregar el camino a tu perfil o revisa que no tengas una mochila ya creada para este camino"
      );
    }
  }
  let content = await response.text();
  return content;
}

async function apiAddItem(itemInfo) {
  return fetch(`${url.base}${url.addItem}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
    body: JSON.stringify(itemInfo),
  }).then((data) => data.json());
}
