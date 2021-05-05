import React, { useState, useEffect, useCallback } from 'react';
import isEmpty from 'lodash/isEmpty';
import some from 'lodash/some';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import appRoutes from '../../../config/appRoutes';
import url from '../../../config/url';
import { validatePassword } from '../../../utils';
import GlobalStyle from '../../../globalStyles';
import { TextInputEditForm } from '../../atoms';
import { Navbar, Footer } from '../../organisms';
import dropMeEditProfile from '../../../assets/images/gota-show-profile.png';
import profilePhoto from '../../../assets/images/photo-profile-generic.png';
import {
  Container,
  ColumnImg,
  Section,
  Img,
  ColumnText,
  Row,
  PhotoProfile,
  NameProfile,
  SurnameProfile,
  ContainerName,
  FormEdit,
  ButtonDelete,
  ButtonSave,
  RowButton,
} from './styled';
import DeleteAccountModal from '../../modals/deleteAccount';
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function MeEditProfile() {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  const [errors, setErrors] = useState({
    name: '',
    surname: '',
    email: '',
    oldPassword: '',
    newPassword: '',
    passwordConfirm: '',
  });

  const validate = useCallback(() => {
    console.log('en validate');
    const newErrors = {
      name: '',
      surname: '',
      oldPassword: '',
      newPassword: '',
      passwordConfirm: '',
    };

    if (!userData.oldPassword)
      newErrors.oldPassword = 'Introduce tu contraseña actual';
    if (userData.newPassword && !validatePassword(userData.newPassword))
      newErrors.newPassword = 'Mínimo 8 caracteres, minúsculas y mayúsculas';
    if (
      userData.newPassword &&
      userData.newPassword !== userData.passwordConfirm
    )
      newErrors.passwordConfirm = 'La contraseña no coincide';
    if (userData.passwordConfirm && !userData.newPassword)
      newErrors.newPassword = 'Introduce tu nueva contraseña';

    setErrors(newErrors);
  }, [userData]);

  useEffect(() => {
    validate();
  }, [userData, validate]);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await apiMeProfile();
        if (response.message == "Expired token") {
          toast.info(
            'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
          );
          history.replace(appRoutes.login);
        } else {
          response.oldPassword = '';
          response.newPassword = '';
          setUserData(response);
        }
      } catch {
        toast.error(
          'Error del servidor. Por favor, cierra sesión y vuelve a entrar'
        );
      }
    }
    fetchProfile();
  }, []);

  const convertirBase64 = (archivo) => {
    var reader = new FileReader();
    reader.readAsDataURL(archivo[0])
    reader.onload = function () {
      userData.picture = reader.result;
    }
  }

  const handleChange = event => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async event => {
    event.preventDefault();
    const invalidForm = some(errors, error => !isEmpty(error));
    if (!invalidForm) {
      try {
        var respuesta = await apiEditProfile(userData);
        if (respuesta.message === undefined) {
          toast.success('¡Datos actualizados!');
        } else {
          if (respuesta.message === 'Expired token') {
            toast.info(
              'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
            );
            history.replace(appRoutes.login);
          }
          if (respuesta.message === 'Password is wrong') {
            toast.error('Contraseña incorrecta');
          }
        }
      } catch (e) {
        toast.error('Error del servidor. Por favor, inténtelo de nuevo');
      }
    } else {
      toast.warn('Por favor, rellena todos los datos necesarios');
    }
  };
  /* modal */
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Container>
        <Row>
          <Section role="sección" tabIndex="0">
            Editar Perfil
          </Section>
        </Row>
        <Row>
          <ColumnImg>
            <Img
              src={dropMeEditProfile}
              alt="Peregrino andando sobre un sendero en la montaña"
            />
          </ColumnImg>
          <ColumnText>
            <Row>
<<<<<<< HEAD
              <PhotoProfile aria-label="foto de perfil" tabIndex="0" />
=======
              <PhotoProfile
                src={(userData.picture) ? userData.picture : profilePhoto}
                alt="Foto de perfil"
              ></PhotoProfile>
>>>>>>> 0168b9bc7833d39710e40c6aae3d67ca02dee435
            </Row>
            <ContainerName aria-label="nombre de perfil" tabIndex="0">
              <NameProfile aria-label={userData?.name} tabIndex="0">
                {userData?.name}
              </NameProfile>
              <SurnameProfile aria-label={userData?.surname} tabIndex="0">
                {userData?.surname}
              </SurnameProfile>
            </ContainerName>
            <Row>
              <TextInputEditForm
                label="Nueva foto de perfil"
                name="picture"
                type="file"
                //accept=".jpg,.jpeg,.png,.tiff,.eps"
                //max-size="1048576"
                onChange={(e) => convertirBase64(e.target.files)}
              //onChange={handleChange}
              />
            </Row>
            <Row>
              <FormEdit>
                <form onSubmit={handleSubmit}>
                  <Row>
                    <TextInputEditForm
                      label="Nombre"
                      name="name"
                      placeholder="Nombre"
                      type="text"
                      value={userData?.name}
                      error={errors.name}
                      onChange={handleChange}
                      onBlur={validate}
                    />
                    <TextInputEditForm
                      label="Apellidos"
                      placeholder="Apellidos"
                      name="surname"
                      type="text"
                      value={userData?.surname}
                      error={errors.surname}
                      onChange={handleChange}
                      onBlur={validate}
                    />
                  </Row>
                  <Row>
                    <TextInputEditForm
                      label="Email"
                      placeholder="Email"
                      name="email"
                      type="email"
                      value={userData?.email}
                      disabled={true}
                    />
                  </Row>
                  <Row>
                    <TextInputEditForm
                      label="Nueva contraseña"
                      placeholder="Min. 8 caracteres, minúsculas y mayúsculas"
                      name="newPassword"
                      type="password"
                      value={userData?.newPassword}
                      error={errors.newPassword}
                      onChange={handleChange}
                      onBlur={validate}
                    />
                    <TextInputEditForm
                      label="Confirme contraseña"
                      placeholder="Min. 8 caracteres, minúsculas y mayúsculas"
                      name="passwordConfirm"
                      type="password"
                      value={userData?.passwordConfirm}
                      error={errors.passwordConfirm}
                      onChange={handleChange}
                      onBlur={validate}
                    />
                  </Row>
                  <Row>
                    <TextInputEditForm
                      label="Contraseña actual*"
                      placeholder="Min. 8 caracteres, minúsculas y mayúsculas"
                      name="oldPassword"
                      type="password"
                      value={userData?.oldPassword}
                      error={errors.oldPassword}
                      onChange={handleChange}
                      onBlur={validate}
                    />
                  </Row>
                  <RowButton>
                    <ButtonDelete
                      label="Eliminar cuenta"
                      name="Eliminar cuenta"
                      id="delete"
                      type="button"
                      onClick={handleClickOpen}
                      button-label="Eliminar cuenta"
                    >
                      Eliminar cuenta
                    </ButtonDelete>

                    <Dialog
                      open={open}
                      TransitionComponent={Transition}
                      keepMounted
                      onClick={handleClose}
                      aria-labelledby="No abandones al peregrino que llevas dentro"
                      aria-describedby="Modal de confirmación cancelación de la cuenta"
                      aria-modal="true"
                      role="dialog"
                    >
                      <DeleteAccountModal />
                    </Dialog>
                    <ButtonSave
                      label="Enviar"
                      id="update"
                      type="submit"
                      onSubmit={handleSubmit}
                      button-label="Guardar"
                    >
                      Guardar
                    </ButtonSave>
                  </RowButton>
                </form>
              </FormEdit>
            </Row>
          </ColumnText>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

async function apiMeProfile() {
  return fetch(`${url.base}${url.meProfile}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  }).then(data => data.json());
}
async function apiEditProfile(dataUser) {
  return fetch(`${url.base}${url.meEditProfile}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
    body: JSON.stringify(dataUser),
  }).then(data => data.json());
}
