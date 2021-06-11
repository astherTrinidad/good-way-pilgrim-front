import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import _findIndex from "lodash/findIndex";
import { TiEdit, TiDelete } from "react-icons/ti";
import { Navbar, Footer, Slider } from "../../organisms";
import { SlideData } from "../../organisms/slider/slideData";
import ButtonDeleteIcon from "../../atoms/buttonDeleteIcon";
import appRoutes from "../../../config/appRoutes";
import url from "../../../config/url";
import { toast } from "react-toastify";
import GlobalStyle from "../../../globalStyles";
import {
  Container,
  Row,
  RowPath,
  Section,
  TextWrapper,
  Heading,
  Subtitle,
  ColumnImg,
  Column,
  Img,
  ConchaIcon,
  TextWrapperWithoutBackpacks,
  NumberStep,
  ArrowStep,
  TextStep,
  ContainerList,
  ContainerForm,
  RowWithoutBackpacks,
  // Icons,
  TitleList,
} from "./styled";
import Cards from "../../molecules/cards";
import CardsSmall from "../../molecules/cardsSmall";
import BackpackItemList from "../../molecules/backpackForm/BackpackItemList";
import dropBackpacks from "../../../assets/images/drop-backpacks.png";
import conchaIcon from "../../../assets/images/conchaTurquoise.png";
import modalDeleteCamino from "../../modals/deleteBackpack";

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

  // const [input, setInput] = useState("");
  // const [quantity, setQuantity] = useState(Number);

  // const [edit, setEdit] = useState({
  //   id: null,
  //   value: "",
  //   quantity: "",
  // });

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
      console.log(newBackpack);
      pathId.camino = event.target.id;
      setPathId(pathId);
      let responseCreateBackpack = await apiCreateBackpack(pathId);

      const responseMyBackpacks = await apiMyBackpacks();
      setUserBackpacks(responseMyBackpacks);

      let response = JSON.parse(responseCreateBackpack);
      console.log("parse" + response.message);

      if (response.message === "success") {
        toast.success("¡Mochila creada!");
        setNewBackpack(true);
      } else if (
        response.message === "User already has a backpack for this path"
      ) {
        toast.error("Ya tienes una mochila creada para este camino");
      } else if (response.message === "User hasnt got this path") {
        toast.error(
          "Añade primero el camino a tu perfil para poder crear una mochila"
        );
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

  const handleDeleteBackpack = async (event) => {
    console.log("*** D E L ***" + event.target.id);
    event.preventDefault();
    try {
      pathId.camino = event.target.id;
      const responseDeleteBackpack = await apiDeleteBackpack(pathId);
      const responseMyBackpacks = await apiMyBackpacks();
      if (responseDeleteBackpack.message === "success") {
        setUserBackpacks(responseMyBackpacks);
        toast.success("Mochila eliminada");
        window.location.reload();
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
          title={item.name}
        />
      </>
    );
  });

  const renderUserBackpacks = userBackpacks.map((item, index) => {
    const idCamino = _findIndex(MeBackpacks, (element) => {
      return element.id === item.id;
    });
    const idPathCard = item.id;
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
        <ButtonDeleteIcon
          key={index + 1}
          id={idPathCard}
          onClick={handleDeleteBackpack}
          type="submit"
          value={idPathCard}
          label="X"
        />
      </>
    );
  });

  const renderInfoBackpack = infoBackpack.map((item, index) => {
    return (
      <>
        <ContainerForm key={index}>
          <div key={index}>
            {item.quantity} {item.object}
          </div>
        </ContainerForm>
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
        {userBackpacks.length <= 0 ? (
          <RowWithoutBackpacks>
            <TextWrapperWithoutBackpacks>
              <Heading
                aria-label="No tienes ninguna mochila creada"
                tabIndex="0"
              >
                No tienes ninguna mochila creada
              </Heading>
              <Subtitle
                aria-label="¡No te olvides de nada! Configura tu nueva mochila para el camino que decidas,
                simplemente indica la cantidad y el nombre del objeto, puedes añadir,
                editar y eliminar todo aquello que creas necesario."
                tabIndex="0"
              >
                ¡No te olvides de nada! Configura tu mochila para este camino,
                simplemente indica la cantidad y el objeto, puedes añadir,
                editar y eliminar todo aquello que creas necesario.
              </Subtitle>

              <Subtitle
                aria-label=" Ten en cuenta que la capacidad de la mochila debería estar
                dentro del rango que va de los 35 a los 45 litros en época de
                buen tiempo y de los 50 a los 60 litros en invierno. ¿A qué
                esperas?"
                tabIndex="0"
              >
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
                title="Peregrino andando sobre un sendero en la montaña"
              />
            </ColumnImg>
          </RowWithoutBackpacks>
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

        <Row>{renderUserBackpacks}</Row>
        {showBackpack ? (
          <Column>
            <TitleList>Lista de objetos</TitleList>
            {renderInfoBackpack}
          </Column>
        ) : (
          <Column />
        )}

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
        <RowPath>{renderAllCaminos}</RowPath>

        {newBackpack && (
          <>
            <Row>
              <ConchaIcon src={conchaIcon} />
              <NumberStep>
                Paso 2 <ArrowStep>{">"}</ArrowStep>
                <TextStep>Empieza a añadir objetos</TextStep>
              </NumberStep>
            </Row>
            <Row>
              <ContainerList className="backpack-app">
                <BackpackItemList />
              </ContainerList>
            </Row>
          </>
        )}
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

async function apiDeleteBackpack(pathId) {
  return fetch(`${url.base}${url.deleteBackpack}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
    body: JSON.stringify(pathId),
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
