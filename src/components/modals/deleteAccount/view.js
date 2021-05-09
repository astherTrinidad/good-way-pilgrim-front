import React from 'react';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import appRoutes from '../../../config/appRoutes';
import url from '../../../config/url';
import { Illustration, ButtonDelete, ButtonSave } from './styled';
import modalIllustration from '../../../assets/images/modal-illustration-delete.png';

const DeleteAccountModal = () => {
  const history = useHistory();
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const deleteUser = async event => {
    console.log('en delete');
    event.preventDefault();
    try {
      var respuesta = await apiDeleteProfile();
      toast.success('¡Esperamos volver a verte pronto peregrino!');
      sessionStorage.removeItem('token');
      history.replace(appRoutes.login);
    } catch (e) {
      toast.error('Error del servidor. Por favor, inténtelo de nuevo');
    }
  };

  return (
    <>
      <DialogTitle id="deleteAccountmodal">
        {'¡No abandones al peregrino que llevas dentro!'}
      </DialogTitle>
      <DialogContent>
        <Illustration
          src={modalIllustration}
          alt="Ilustración de una chica en la montaña"
        />
      </DialogContent>
      <DialogActions>
        <ButtonDelete
          onClick={deleteUser}
          role="button"
          button-label="¡Me voy!"
        >
          ¡Me voy!
        </ButtonDelete>
        <ButtonSave
          onClose={handleClose}
          role="button"
          button-label="¡Me quedo!"
        >
          ¡Me quedo!
        </ButtonSave>
      </DialogActions>
    </>
  );
};

export default DeleteAccountModal;
async function apiDeleteProfile() {
  return fetch(`${url.base}${url.meDeleteProfile}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  }).then(data => data.json());
}
