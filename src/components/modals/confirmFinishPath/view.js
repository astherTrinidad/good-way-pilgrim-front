import React, { useState } from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import appRoutes from '../../../config/appRoutes';
import url from '../../../config/url';
import { Illustration, ButtonDelete, ButtonSave, Container } from './styled';
import modalBin from '../../../assets/images/modal-illustration-finishPath.png';
import { DialogContentText } from '@material-ui/core';

const ConfirmFinishPath = () => {
  const [activePath, setActivePath] = useState([]);
  const [isFetching, setIsfetching] = useState(false);
  const [finishPath, setFinishPath] = useState({
    camino: '',
    finish_date: '',
  });
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const getCurrentDate = () => {
    let addPathDate = new Date();
    let day =
      addPathDate.getDate() < 9
        ? '0' + addPathDate.getDate()
        : addPathDate.getDate();
    let month =
      addPathDate.getMonth() < 9
        ? '0' + addPathDate.getMonth()
        : addPathDate.getMonth();
    let year = addPathDate.getFullYear();
    return (addPathDate = year + '-' + month + '-' + day);
  };

  const onClickFinishPath = async event => {
    event.preventDefault();
    try {
      setIsfetching(true);
      var responseActivePaths = await apiActivePath();
      setActivePath(responseActivePaths);
      var pathId = (finishPath.camino = responseActivePaths.id);
      var etapaFinishDate = (finishPath.finish_date = getCurrentDate());
      var response = await apiFinishPath(finishPath);
      setFinishPath(etapaFinishDate);
      setFinishPath(pathId);

      if (response.message == 'Expired token') {
        toast.info(
          'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
        );
        history.replace(appRoutes.login);
      }

      toast.success('¡Enhorabuena peregrino! Has terminado el camino');
      setIsfetching(false);
      history.replace(appRoutes.caminos);
    } catch (e) {
      console.log('Error del servidor. Por favor, inténtelo de nuevo');
      setIsfetching(false);
    }
  };

  return (
    <>
      <Container>
        <DialogTitle id="deleteAccountmodal">
          {'¡Genial, terminaste el camino!'}
        </DialogTitle>
        <DialogContent>
          <Illustration
            src={modalBin}
            alt="Ilustración de una chico corriendo"
          />
          <DialogContentText>
            {
              'Si deseas marcar este camino como terminado, no podrás reactivarlo. ¿Estás seguro?'
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonDelete
            onClick={onClickFinishPath}
            role="button"
            button-label="Sí"
          >
            Sí
          </ButtonDelete>
          <ButtonSave
            onClose={handleClose}
            role="button"
            button-label="No"
            isFetching={isFetching}
          >
            No
          </ButtonSave>
        </DialogActions>
      </Container>
    </>
  );
};

export default ConfirmFinishPath;

async function apiFinishPath(etapaInfo) {
  let response = await fetch(`${url.base}${url.finishPath}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
    body: JSON.stringify(etapaInfo),
  });

  let content = await response.text();
  return content;
}

async function apiActivePath() {
  return fetch(`${url.base}${url.activePath}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  }).then(data => data.json());
}
