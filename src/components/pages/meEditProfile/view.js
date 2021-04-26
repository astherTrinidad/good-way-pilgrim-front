import React, { useState, useEffect, useCallback } from 'react';
import isEmpty from 'lodash/isEmpty';
import some from 'lodash/some';
import { toast } from 'react-toastify';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import { TextInput } from '../../atoms';
import { Navbar, Footer } from '../../organisms';
import { validateEmail, validatePassword } from '../../../utils';

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
  const [isFetchingUser, setIsFetchingUser] = useState(false);

  useEffect(() => {
    async function fetchProfile() {
      try {
        setIsFetchingUser(true);
        const response = await apiMeProfile();
        response.oldPassword = '';
        response.newPassword = '';
        delete response.picture;
        setUserData(response);
      } catch {
        toast.error(
          'Error del servidor. Por favor, cierra sesión y vuelve a entrar'
        );
      } finally {
        setIsFetchingUser(false);
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

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setIsFetchingUser(true);
      var respuesta = await apiEditProfile(userData);
      if (respuesta.message == undefined) {
        toast.success('¡Datos actualizados!');
      } else {
        if (respuesta.message == 'Expired token') {
          toast.info(
            'Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos'
          );
          history.replace('../login');
        }
        if (respuesta.message == 'Password is wrong') {
          toast.error('Contraseña incorrecta');
        }
      }
    } catch (e) {
      setIsFetchingUser(false);
      toast.error('Error del servidor. Por favor, inténtelo de nuevo');
    }
  };

  const deleteUser = async event => {
    console.log('en delete');
    event.preventDefault();
    try {
      console.log('en try');
      setIsFetchingUser(true);
      var respuesta = await apiDeleteProfile();
      toast.success('¡Esperamos volver a verte pronto peregrino!');
      sessionStorage.removeItem('token');
      history.replace('./login');
    } catch (e) {
      console.log('en catch');
      setIsFetchingUser(false);
      toast.error('Error del servidor. Por favor, inténtelo de nuevo');
    }
  };
  return (
    <Router>
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
                    <TextInput
                      label="Nombre"
                      name="name"
                      placeholder="Nombre"
                      type="text"
                      value={userData?.name}
                      // touched={touched.name}
                      //error={errors.name}
                      onChange={handleChange}
                      // onBlur={handleBlur}
                    />
                    <TextInput
                      label="Apellidos"
                      placeholder="Apellidos"
                      name="surname"
                      type="text"
                      value={userData?.surname}
                      // touched={touched.surname}
                      //error={errors.surname}
                      onChange={handleChange}
                      // onBlur={handleBlur}
                    />
                  </Row>
                  <Row>
                    <TextInput
                      label="Email"
                      placeholder="Email"
                      name="email"
                      type="email"
                      value={userData?.email}
                      // touched={touched.email}
                      // error={errors.email}
                      // onChange={handleChange}
                      // onBlur={handleBlur}
                      disabled={true}
                    />
                  </Row>
                  <Row>
                    <TextInput
                      label="Contraseña actual"
                      placeholder=""
                      name="oldPassword"
                      type="password"
                      value={userData?.oldPassword}
                      // touched={touched.currentPassword}
                      // error={errors.currentPassword}
                      onChange={handleChange}
                      // onBlur={handleBlur}
                    />
                  </Row>
                  <Row>
                    <TextInput
                      label="Nueva contraseña"
                      placeholder=""
                      name="newPassword"
                      type="password"
                      value={userData?.newPassword}
                      // touched={touched.nuevaPassword}
                      // error={errors.nuevaPassword}
                      onChange={handleChange}
                      // onBlur={handleBlur}
                    />
                    <TextInput
                      label="Confirme contraseña"
                      placeholder=""
                      name="passwordConfirm"
                      type="password"
                      value={userData?.passwordConfirm}
                      // touched={touched.passwordConfirm}
                      // error={errors.passwordConfirm}
                      onChange={handleChange}
                      // onBlur={handleBlur}
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
                      ELiminar Cuenta
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
    </Router>
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
