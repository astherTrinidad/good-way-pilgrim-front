import React, { useState, useEffect, useCallback } from 'react';
import isEmpty from 'lodash/isEmpty';
import some from 'lodash/some';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { TextInputEditForm } from '../../atoms';
import { Navbar, Footer } from '../../organisms';
import { validatePassword } from '../../../utils';
import appRoutes from '../../../config/appRoutes';
import GlobalStyle from '../../../globalStyles';
import dropMeEditProfile from '../../../assets/images/gota-show-profile.png';
import url from '../../../config/url';
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

export default function MeEditProfile() {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  const [touched, setTouched] = useState({
    name: false,
    surname: false,
    email: false,
    password: false,
    passwordConfirm: false,
  });

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
        response.oldPassword = '';
        response.newPassword = '';
        delete response.picture;
        setUserData(response);
      } catch {
        toast.error(
          'Error del servidor. Por favor, cierra sesión y vuelve a entrar'
        );
      }
    }
    fetchProfile();
  }, []);

  const handleChange = event => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = event => {
    setTouched({
      ...touched,
      [event.target.name]: true,
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
    }else{
      toast.warn('Por favor, rellena todos los datos necesarios');
    }
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
      <GlobalStyle />
      <Navbar />
      <Container>
        <Row>
          <Section>Editar Perfil</Section>
        </Row>
        <Row>
          <ColumnImg>
            <Img src={dropMeEditProfile} alt="Texto" />
          </ColumnImg>
          <ColumnText>
            <Row>
              <PhotoProfile />
            </Row>
            <ContainerName>
              <NameProfile>{userData?.name}</NameProfile>
              <SurnameProfile>{userData?.surname}</SurnameProfile>
            </ContainerName>
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
                      touched={touched.name}
                      error={errors.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <TextInputEditForm
                      label="Apellidos"
                      placeholder="Apellidos"
                      name="surname"
                      type="text"
                      value={userData?.surname}
                      touched={touched.surname}
                      error={errors.surname}
                      onChange={handleChange}
                      onBlur={handleBlur}
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
                      touched={touched.newPassword}
                      error={errors.newPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <TextInputEditForm
                      label="Confirme contraseña"
                      placeholder="Min. 8 caracteres, minúsculas y mayúsculas"
                      name="passwordConfirm"
                      type="password"
                      value={userData?.passwordConfirm}
                      touched={touched.passwordConfirm}
                      error={errors.passwordConfirm}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Row>
                  <Row>
                    <TextInputEditForm
                      label="Contraseña actual"
                      placeholder="Min. 8 caracteres, minúsculas y mayúsculas"
                      name="oldPassword"
                      type="password"
                      value={userData?.oldPassword}
                      touched={touched.oldPassword}
                      error={errors.oldPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </Row>
                  <RowButton>
                    <ButtonDelete
                      label="Eliminar cuenta"
                      name="Eliminar cuenta"
                      id="delete"
                      type="button"
                      onClick={deleteUser}
                    >
                      Eliminar cuenta
                    </ButtonDelete>
                    <ButtonSave
                      label="Enviar"
                      id="update"
                      type="submit"
                      onSubmit={handleSubmit}
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
async function apiDeleteProfile() {
  return fetch(`${url.base}${url.meDeleteProfile}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + sessionStorage.getItem('token'),
    },
  }).then(data => data.json());
}
