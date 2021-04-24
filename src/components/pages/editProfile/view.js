import React, { useState, useEffect, useCallback } from 'react';
import isEmpty from 'lodash/isEmpty';
import some from 'lodash/some';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { TextInput} from '../../atoms/';
import { validateEmail, validatePassword } from '../../../utils';
import {PhotoProfile, ContainerName, NameProfile, SurnameProfile, FormEdit, ButtonDelete, ButtonSave} from './styled';

import GlobalStyle from '../../../globalStyles';
import { Navbar, Footer, InfoSectionTwoColumn } from '../../organisms';
import { editUserProfile } from './Data';
import  url from '../../../config/url' 

async function apiEditProfile(credentials) {
  return fetch(`${url.base}${url.EditProfile}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then(data => data.json());
}

const EditProfile = () => {
  //  const { setToken } = useToken();
  const history = useHistory();

  const [data, setData] = useState({
    name: '',
    surname: '',
    email: '',
    currentPassword: '',
    password: '',
    passwordConfirm: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    surname: false,
    email: false,
    currentPassword: false,
    password: false,
    passwordConfirm: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    surname: '',
    email: '',
    currentPassword: '',
    password: '',
    passwordConfirm: '',
  });

  const [isFetching, setIsfetching] = useState(false);

  const validate = useCallback(() => {
    const newErrors = {
      name: '',
      surname: '',
      email: '',
      currentPassword: '',
      password: '',
      passwordConfirm: '',
    };

    if (!data.name) newErrors.name = 'Campo obligatorio';

    if (!data.surname) newErrors.surname = 'Campo obligatorio';

    if (!data.email) newErrors.email = 'Campo obligatorio';
    else if (!validateEmail(data.email)) newErrors.email = 'Email inválido';

    if (!data.password) newErrors.password = 'Campo obligatorio';
    else if (!validatePassword(data.password))
      newErrors.password =
        'Debe contener 8 caracteres, minúsuculas y mayúsculas';

    if (!data.passwordConfirm) newErrors.passwordConfirm = 'Campo obligatorio';
    else if (data.password !== data.passwordConfirm)
      newErrors.passwordConfirm = 'Contraseña no coincide';

    setErrors(newErrors);
  }, [data]);

  useEffect(() => {
    validate();
  }, [data, validate]);

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = event => {
    setTouched({
      ...touched,
      [event.target.name]: true,
    });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const invalidForm = some(errors, error => !isEmpty(error));
    if (!invalidForm) {
      console.log(data);
      try {
        setIsfetching(true);
        const respuesta = await apiEditProfile(data); //data: @ y pass
        localStorage.setItem('token', respuesta); //manera desglosada
        //setToken(respuesta);
        toast.success('¡Bienvenido/a!');
        history.replace('/login');
      } catch (e) {
        setIsfetching(false);
        toast.error('Error de servidor. Inténtelo más tarde');
      }
    } else {
      setTouched({
        name: true,
        surname: true,
        email: true,
        currentPassword: true,
        password: true,
        passwordConfirm: true,
      });
    }
  };

  return (
    <Router>
    <GlobalStyle />
      <Navbar />
      <PhotoProfile />
      <ContainerName>
        <NameProfile>{localStorage.getItem('name')}</NameProfile>
        <SurnameProfile>Apellidos</SurnameProfile>
          <FormEdit>
      <form onSubmit={handleSubmit}>
        <TextInput
          placeholder="Nombre"
          name="name"
          type="text"
          value={data.name}
          touched={touched.name}
          error={errors.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextInput
          placeholder="Apellidos"
          name="surname"
          type="text"
          value={data.surname}
          touched={touched.surname}
          error={errors.surname}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <TextInput
          placeholder="Email"
          name="email"
          type="email"
          value={data.email}
          touched={touched.email}
          error={errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
          disabled={true}
        />
          <TextInput
          placeholder="Contraseña actual"
          name="currentPassword"
          type="password"
          value={data.currentPassword}
          touched={touched.currentPassword}
          error={errors.currentPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextInput
          placeholder="Nueva Contraseña"
          name="nuevaPassword"
          type="password"
          value={data.nuevaPassword}
          touched={touched.nuevaPassword}
          error={errors.nuevaPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextInput
          placeholder="Confirme su contraseña"
          name="passwordConfirm"
          type="password"
          value={data.passwordConfirm}
          touched={touched.passwordConfirm}
          error={errors.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ButtonDelete label="Eliminar cuenta" name="Eliminar cuenta" id="delete" type="submit" isFetching={isFetching}>ELiminar Cuenta</ButtonDelete>
        <ButtonSave label="Enviar" id="sends" type="submit" isFetching={isFetching}>Guardar</ButtonSave>
      </form>
      </FormEdit>
      </ContainerName>
      <InfoSectionTwoColumn {...editUserProfile} />
      <Footer/>
      </Router>
  );
};

export default EditProfile;
