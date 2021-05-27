import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Navbar, Footer } from "../../organisms";
import ButtonTurquoise from "./../../atoms/buttonTurquoise";
import appRoutes from "../../../config/appRoutes";
import url from "../../../config/url";
import { toast } from "react-toastify";

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

  const showInfoBackpack = async (event) => {
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

  const renderMyBackpacks = myBackpacks.map((item) => {
    console.log("idbutton: " + item.id);
    return (
      <>
        <h1>{item.name}</h1>
        <h2>{item.numObjects}</h2>
        <ButtonTurquoise
          id={item.id}
          type="button"
          onClick={showInfoBackpack}
          label="Ver info"
          value="show info"
        />
        <ButtonTurquoise
          id={item.id}
          type="button"
          onClick={deleteBackpack}
          label="Borrar Mochila"
          value="delete backpack"
        />
      </>
    );
  });

  const renderInfoBackpack = infoBackpack.map((item, pathItem) => {
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
      <Navbar />
      {renderMyBackpacks}
      {renderInfoBackpack}
      {renderAllCaminos}
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
