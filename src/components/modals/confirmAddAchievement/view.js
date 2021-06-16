import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { DialogContentText } from "@material-ui/core";
import { toast } from "react-toastify";
import appRoutes from "../../../config/appRoutes";
import url from "../../../config/url";
import { Illustration, ButtonDelete, ButtonSave, Container } from "./styled";
import modalAddAchievement from "../../../assets/images/modal-achievement-add.png";

const ConfirmAddAchievement = () => {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);

  const [userAchievement, setUserAchievement] = useState({
    achievement: "",
    date: "",
  });
  const handleClose = () => {
    setOpen(false);
  };

  const getCurrentDate = () => {
    let addAchievementDate = new Date();
    let day =
      addAchievementDate.getDate() < 9
        ? "0" + addAchievementDate.getDate()
        : addAchievementDate.getDate();
    let month =
      addAchievementDate.getMonth() < 9
        ? "0" + addAchievementDate.getMonth()
        : addAchievementDate.getMonth();
    let year = addAchievementDate.getFullYear();
    return (addAchievementDate = year + "-" + month + "-" + day);
  };

  const onClickAddAchievement = async (event) => {
    event.preventDefault();
    try {
      const idL = (userAchievement.achievement = 3);
      setUserAchievement(idL);
      const achievementDate = (userAchievement.date = getCurrentDate());
      setUserAchievement(achievementDate);

      var respuesta = await apiAddAchievement(userAchievement);
      if (respuesta.message === "success") {
        toast.success("¡Enhorabuena peregrino! Has conseguido un nuevo logro");
      }
      if (respuesta.message === "Expired token") {
        toast.info(
          "Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos"
        );
        history.replace(appRoutes.login);
      }
    } catch (e) {
      console.log("Error del servidor. Por favor, inténtelo de nuevo");
    }
  };
  return (
    <>
      <Container>
        <DialogTitle id="confirmAddAchievementModal">
          {"¡Enhorabuena por conseguirlo!"}
        </DialogTitle>
        <DialogContent>
          <Illustration
            src={modalAddAchievement}
            alt="Ilustración de dos ganadores con medalla"
          />
          <DialogContentText>¿Quiéres añadir el logro?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonDelete onClick={handleClose} role="button" button-label="No">
            No
          </ButtonDelete>
          <ButtonSave
            onClick={onClickAddAchievement}
            role="button"
            button-label="Sí"
          >
            Sí
          </ButtonSave>
        </DialogActions>
      </Container>
    </>
  );
};

export default ConfirmAddAchievement;

async function apiAddAchievement(achievementInfo) {
  return fetch(`${url.base}${url.addLogros}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + sessionStorage.getItem("token"),
    },
    body: JSON.stringify(achievementInfo),
  }).then((data) => data.json());
}
