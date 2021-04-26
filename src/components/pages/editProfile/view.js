import React, { useState, useEffect, useCallback } from 'react';
import isEmpty from 'lodash/isEmpty';
import some from 'lodash/some';
import { toast } from 'react-toastify';
import { BrowserRouter as Router, useHistory } from 'react-router-dom'; 
import { TextInput } from '../../atoms/';
import { validateEmail, validatePassword } from '../../../utils';
import {
  PhotoProfile,
  ContainerName,
  NameProfile,
  SurnameProfile,
  FormEdit,
  ButtonDelete,
  ButtonSave,
} from './styled';
import GlobalStyle from '../../../globalStyles';
import { Navbar, Footer, InfoSectionTwoColumn } from '../../organisms';
import { editUserProfile } from './Data';
import url from '../../../config/url';

export default function EditProfile() {
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
        delete response.picture
        setUserData(response);
      } catch {
        toast.error('Error del servidor. Por favor, cierra sesión y vuelve a entrar');
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
        if (respuesta.message == "Expired token") {
          toast.info('Por seguridad tu sesión ha expirado. Por favor, vuelve a introducir tus datos')
          history.replace('../login')
        }
        if (respuesta.message == "Password is wrong") {
          toast.error('Contraseña incorrecta')
        }
      }
    } catch (e) {
      setIsFetchingUser(false);
      toast.error('Error del servidor. Por favor, inténtelo de nuevo');
    }
  }

  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <PhotoProfile />
      <ContainerName>
        <NameProfile>{userData?.name}</NameProfile>
        <SurnameProfile>{userData?.surname}</SurnameProfile>
        <FormEdit>
          <form onSubmit={handleSubmit}>
            <TextInput
              name="name"
              type="text"
              value={userData?.name}
              // touched={touched.name}
              // error={errors.name}
              onChange={handleChange}
            // onBlur={handleBlur}
            />
            <TextInput
              placeholder="Apellidos"
              name="surname"
              type="text"
              value={userData?.surname}
            // touched={touched.surname}
            // error={errors.surname}
            // onChange={handleChange}
            // onBlur={handleBlur}
            />

            <TextInput
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
            <TextInput
              placeholder="Contraseña actual"
              name="oldPassword"
              type="password"
              value={userData?.oldPassword}
              // touched={touched.currentPassword}
              // error={errors.currentPassword}
              onChange={handleChange}
            // onBlur={handleBlur}
            />
            <TextInput
              placeholder="Nueva Contraseña"
              name="newPassword"
              type="password"
              value={userData?.newPassword}
              // touched={touched.nuevaPassword}
              // error={errors.nuevaPassword}
              onChange={handleChange}
            // onBlur={handleBlur}
            />
            <TextInput
              placeholder="Confirme su contraseña"
              name="passwordConfirm"
              type="password"
              value={userData?.passwordConfirm}
              // touched={touched.passwordConfirm}
              // error={errors.passwordConfirm}
              onChange={handleChange}
            // onBlur={handleBlur}
            />
            <ButtonDelete
              label="Eliminar cuenta"
              name="Eliminar cuenta"
              id="delete"
              type="button"
            //isFetching={isFetching}
            >
              ELiminar Cuenta
            </ButtonDelete>
            <ButtonSave
              label="Enviar"
              id="update"
              type="submit"
            //isFetching={isFetching}
            >
              Guardar
            </ButtonSave>
          </form>
        </FormEdit>
      </ContainerName>
      <InfoSectionTwoColumn {...editUserProfile} />
      <Footer />
    </Router>
  );
}

async function apiMeProfile() {
  return fetch(`${url.base}${url.meProfile}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
    },
  }).then(data => data.json());
}
async function apiEditProfile(dataUser) {
  return fetch(`${url.base}${url.meEditProfile}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
    },
    body: JSON.stringify(dataUser),
  }).then(data => data.json());
}
async function apiDeleteProfile() {
  return fetch(`${url.base}${url.meDeleteProfile}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + sessionStorage.getItem('token'),
    }
  }).then(data => data.json());
}
/*
try {
      setIsFetchingUser(true);
      var respuesta = await apiDeleteProfile();
        toast.success('¡Esperamos volver a verte pronto peregrino!');
        sessionStorage.removeItem('token');
        history.replace(../login)
    } catch (e) {
      setIsFetchingUser(false);
      toast.error('Error del servidor. Por favor, inténtelo de nuevo');
    }*/
