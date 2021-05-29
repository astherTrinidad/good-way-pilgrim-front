import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Footer } from "../../organisms";
import { SlideData } from "../../molecules/slide/slideData";
import Slide from "../../molecules/slide";
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
} from "./styled";
import Cards from "../../molecules/cards";
import backpackIllustration from "../../../assets/images/backpack-05.png";

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
        console.log(responseMyBackpacks);
        setMyBackpacks(responseMyBackpacks);
        setCaminos(responseAllPaths);

        if (responseMyBackpacks.message === "Expired token") {
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

  const createBackpack = async (event) => {
    event.preventDefault();
    try {
      pathId.camino = event.target.id;
      setPathId(pathId);
      console.log(pathId);
      const responseCreateBackpack = await apiCreateBackpack(pathId);
      const responseMyBackpacks = await apiMyBackpacks();

      if (responseCreateBackpack.message === "success") {
        setMyBackpacks(responseMyBackpacks);
        toast.success("Mochila creada");
      }
      if (responseCreateBackpack.message === "Expired token") {
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

  const renderAllCaminos = allCaminos.map((item) => {
    return (
      <>
        <p onClick={createBackpack} id={item.id}>
          {item.name}
        </p>
      </>
    );
  });

  const renderMyBackpacks = myBackpacks.map((item, index) => {
    console.log("idbutton: " + item.id);
    return (
      <>
        <ColumnCard key={index}>
          <Cards
            id={item.id}
            src={backpackIllustration}
            name={item.name}
            quantity={item.numObjects}
            onClick={handleShowInfoBackpack}
          />
        </ColumnCard>
      </>
    );
  });

  const renderInfoBackpack = infoBackpack.map((item, index) => {
    return (
      <>
        <p>
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
        <Row>{renderMyBackpacks}</Row>
        {renderInfoBackpack}
        <Row title="Crear mochila">
          <Section role="sección" tabIndex={0}>
            Crear mochila
          </Section>
        </Row>
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
        {/*Carrousel */}
        <Row>
          <Slide slides={SlideData} />
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

  let content = await response.text();
  return content;
}
