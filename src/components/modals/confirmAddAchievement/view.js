import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { DialogContentText } from '@material-ui/core';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import appRoutes from '../../../config/appRoutes';
import url from '../../../config/url';
import { Illustration, ButtonDelete, ButtonSave, Container } from './styled';
import modalAddAchievement from '../../../assets/images/modal-achievement-add.png';

const ConfirmAddAchievement = () => {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const addAchievement = async event => {
    console.log('en delete');
    event.preventDefault();
    try {
      var respuesta = await apiAddAchievement(); //achievementInfo parameter
      if (respuesta.message == 'success') {
        toast.success('¡Enhorabuena peregrino! Has conseguido un nuevo logro');
      }
      if (respuesta.message == 'Expired token') {
        toast.info(
          'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
        );
        history.replace(appRoutes.login);
      }
    } catch (e) {
      toast.error('Error del servidor. Por favor, inténtelo de nuevo');
    }
  };
  return (
    <>
      <Container>
        <DialogTitle id="confirmAddAchievementModal">
          {'¡Enhorabuena por conseguirlo!'}
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
          <ButtonSave onClose={addAchievement} role="button" button-label="Sí">
            Sí
          </ButtonSave>
        </DialogActions>
      </Container>
    </>
  );
};

export default ConfirmAddAchievement;

async function apiAddAchievement(achievementInfo) {
  //El objeto que entra como parámetro debe incluir el id del logro como "id_logro" y la fecha como "date"
  return fetch(`${url.base}${url.addLogros}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
    body: JSON.stringify(achievementInfo),
  }).then(data => data.json());
}
