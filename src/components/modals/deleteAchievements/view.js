import React, { useState } from "react";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import appRoutes from "../../../config/appRoutes";
import url from "../../../config/url";
import { Illustration, ButtonDelete, ButtonSave, Container } from "./styled";
import modalBin from "../../../assets/images/modal-achievements-delete.png";
import { DialogContentText } from "@material-ui/core";

const DeleteAchievements = () => {
  const [userLogros, setUserLogros] = useState([]);

  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const deleteUser = async (event) => {
    event.preventDefault();
    try {
      var respuesta = await apiDeleteAchievements();
      const myAchievementsResponse = await apiMyAchievements();

      if (respuesta.message === "success") {
        setUserLogros(myAchievementsResponse);
        toast.info("Has eliminado los logros de tu lista");
      }
      if (respuesta.message === "Expired token") {
        toast.info(
          "Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos"
        );
        sessionStorage.removeItem("token");
        history.replace(appRoutes.login);
      }
      window.location.reload();
    } catch (e) {
      console.log("Error del servidor. Por favor, inténtelo de nuevo");
    }
  };

  return (
    <>
      <Container>
        <DialogTitle id="deleteAccountmodal">
          {"¿Empezamos de cero?"}
        </DialogTitle>
        <DialogContent>
          <Illustration
            src={modalBin}
            alt="Ilustración de una chica en la montaña"
          />
          <DialogContentText>
            {"¿Seguro que quieres eliminar todos tus logros?"}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonDelete onClick={deleteUser} role="button" button-label="Sí">
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

export default DeleteAchievements;
async function apiDeleteAchievements() {
  return fetch(`${url.base}${url.deleteAchievements}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
    body: JSON.stringify(),
  }).then((data) => data.json());
}

async function apiMyAchievements() {
  return fetch(`${url.base}${url.meLogros}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
  }).then((data) => data.json());
}
