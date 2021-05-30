import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Footer, Slider } from "../../organisms";
import { SlideData } from "../../organisms/slider/slideData";
import appRoutes from "../../../config/appRoutes";
import url from "../../../config/url";
import { toast } from "react-toastify";
import GlobalStyle from "../../../globalStyles";
import {
  Container,
  Row,
  ColumnCard,
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
  RowCaminos,
} from "./styled";
import Cards from "../../molecules/cards";
import CardsSmall from "../../molecules/cardsSmall";

import backpackIllustration from "../../../assets/images/backpack-05.png";
import dropBackpacks from "../../../assets/images/drop-backpacks.png";
import conchaIcon from "../../../assets/images/conchaTurquoise.png";

const Backpack = () => {
  const [allCaminos, setCaminos] = useState([]);
  const history = useHistory();
  const [myBackpacks, setMyBackpacks] = useState([]);
  const [infoBackpack, setInfoBackpack] = useState([]);
  const [pathId, setPathId] = useState({
    camino: "",
  });

  useEffect(() => {
    async function fetchProfile() {
      try {
        const responseAllPaths = await apiAllPaths();
        const responseMyBackpacks = await apiMyBackpacks();
        setMyBackpacks(responseMyBackpacks);
        setCaminos(responseAllPaths);

        if (responseAllPaths.message === "Expired token") {
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
      }
      if (responseInfo.message == "Expired token") {
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
      setMyBackpacks(responseMyBackpacks);

      if (responseCreateBackpack.message == "success") {
        toast.success("🐱" + "¡Mochila creada!");
      }

      if (responseCreateBackpack.message == "Expired token") {
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
        setMyBackpacks(responseMyBackpacks);
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
    return (
      <>
        <CardsSmall
          key={index}
          id={item.id}
          src={backpackIllustration}
          name={item.name}
          onClick={handleCreateBackpack}
        />
      </>
    );
  });

  const renderMyBackpacks = myBackpacks.map((item, index) => {
    console.log("idbutton: " + item.id);
    return (
      <>
        <Cards
          key={index}
          id={item.id}
          src={backpackIllustration}
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
        {myBackpacks.length <= 0 ? (
          <Row>
            <TextWrapperWithoutBackpacks>
              <Heading
                aria-label="Aún no tienes ninguna mochila creada"
                tabIndex="0"
              >
                No tienes ninguna mochila creada
              </Heading>
              <Subtitle aria-label="¿A qué esperas? " tabIndex="0">
                Ten en cuenta que la capacidad de la mochila debería estar
                dentro del rango que va de los 35 a los 45 litros en época de
                buen tiempo y de los 50 a los 60 litros en invierno. ¿A qué
                esperas?
              </Subtitle>
            </TextWrapperWithoutBackpacks>
            <ColumnImg>
              <Img
                src={dropBackpacks}
                alt="Peregrino andando sobre un sendero en la montaña"
              />
            </ColumnImg>
          </Row>
        ) : (
          <Row>
            <TextWrapper>
              <Heading
                aria-label="En este apartado se muestran tus mochilas creadas"
                tabIndex="0"
              >
                En este apartado se muestran tus mochilas creadas
              </Heading>
              <Subtitle
                aria-label="Puedes acceder a cada una de ellas para ver toda la información,
              editar cada uno de los objetos incluidos o incluso eliminar la
              propia mochila"
                tabIndex="0"
              >
                Puedes acceder a cada una de ellas para ver toda la información,
                editar cada uno de los objetos incluidos o incluso eliminar la
                propia mochila
              </Subtitle>
            </TextWrapper>
          </Row>
        )}

        <Row>{renderMyBackpacks}</Row>
        {renderInfoBackpack}

        <TextWrapper>
          <Heading aria-label="¿Aún no sabes que llevarte?" tabIndex="0">
            ¿Aún no sabes que llevarte?
          </Heading>
          <Subtitle
            aria-label="Es imprescindible tener en cuenta en qué época del año pretendes hacer el camino"
            tabIndex="0"
          >
            Antes de pensar qué vas a meter en tu mochila, es imprescindible
            tener en cuenta en qué época del año pretendes hacer el camino
          </Subtitle>
        </TextWrapper>
        <Row>
          <Slider slides={SlideData} />
        </Row>
        <Row title="Crear mochila">
          <Section role="sección" tabIndex={0}>
            Crear mochila
          </Section>
        </Row>
        <Row>
          <ConchaIcon src={conchaIcon} />
          <NumberStep>
            Paso 1 <ArrowStep>{">"}</ArrowStep>
            <TextStep>
              Selecciona a que camino quieres asociar la mochila nueva
            </TextStep>
          </NumberStep>
        </Row>
        <Row>{renderAllCaminos}</Row>
        <Row>
          <ConchaIcon src={conchaIcon} />
          <NumberStep>
            Paso 2 <ArrowStep>{">"}</ArrowStep>
            <TextStep>Empieza a añadir objetos</TextStep>
          </NumberStep>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default Backpack;

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
