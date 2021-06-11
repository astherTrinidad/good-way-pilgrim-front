import React, { useState } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import appRoutes from "../../../config/appRoutes";
import url from "../../../config/url";
import { Illustration, ButtonDelete, ButtonSave, Container } from "./styled";
import modalDeleteBackpack from "../../../assets/images/modal-backpack-delete.png";
import { DialogContentText } from "@material-ui/core";

const DeleteBackpack = () => {
  const [userBackpacks, setUserBackpacks] = useState([]);
  const [pathId, setPathId] = useState({
    camino: "",
  });
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
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
    alert(event.target.id);
  };

  return (
    <>
      <Container>
        <DialogTitle id="deleteBackpackmodal">
          {"¿Seguro que quieres eliminarla?"}
        </DialogTitle>
        <DialogContent>
          <Illustration
            src={modalDeleteBackpack}
            alt="Ilustración de una mochila en la montaña"
          />
          <DialogContentText>
            {"Una vez elimines la mochila, no podrás recuperarla"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonDelete
            onClick={handleDeleteBackpack}
            role="button"
            button-label="Sí"
          >
            Sí
          </ButtonDelete>
          <ButtonSave onClose={handleClose} role="button" button-label="No">
            No
          </ButtonSave>
        </DialogActions>
      </Container>
    </>
  );
};

export default DeleteBackpack;

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

async function apiMyBackpacks() {
  return fetch(`${url.base}${url.myBackpacks}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  }).then((data) => data.json());
}
