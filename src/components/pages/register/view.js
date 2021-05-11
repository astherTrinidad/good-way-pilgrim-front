import React, { useState, useEffect, useCallback } from 'react';
import isEmpty from 'lodash/isEmpty';
import some from 'lodash/some';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { TextInput, Button, FormHeader, List } from '../../atoms/';
import { validateEmail, validatePassword } from '../../../utils';
import gwpLogo from '../../../assets/images/gwp-blanco-logo.png';
import Styles from './styled';
import url from '../../../config/url';
import appRoutes from '../../../config/appRoutes';

export default function Register() {
  const history = useHistory();

  const [data, setData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

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
    password: '',
    passwordConfirm: '',
  });

  const [isFetching, setIsfetching] = useState(false);

  const validate = useCallback(() => {
    const newErrors = {
      name: '',
      surname: '',
      email: '',
      password: '',
      passwordConfirm: '',
    };

    if (!data.name) newErrors.name = 'Campo obligatorio';

    if (!data.surname) newErrors.surname = 'Campo obligatorio';

    if (!data.email) newErrors.email = 'Campo obligatorio';
    else if (!validateEmail(data.email)) newErrors.email = 'Email inválido';

    if (!data.password) newErrors.password = 'Campo obligatorio';
    else if (!validatePassword(data.password))
      newErrors.password = 'Mínimo 8 caracteres, minúsuculas y mayúsculas';

    if (!data.passwordConfirm) newErrors.passwordConfirm = 'Campo obligatorio';
    else if (data.password !== data.passwordConfirm)
      newErrors.passwordConfirm = 'La contraseña no coincide';

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
      try {
        setIsfetching(true);
        delete data.passwordConfirm;
        var datos = await apiRegister(data);
        datos = JSON.parse(datos);
        if (datos.message === undefined) {
          toast.success('¡Bienvenido/a! Introduce tus datos para entrar');
          history.replace(appRoutes.login);
        }
        setIsfetching(false);
        history.replace(appRoutes.login);
      } catch (e) {
        setIsfetching(false);
        toast.error('Error de servidor. Inténtelo más tarde');
      }
    } else {
      setTouched({
        name: true,
        surname: true,
        email: true,
        password: true,
        passwordConfirm: true,
      });
    }
  };

  return (
    <Styles>
      <FormHeader logo={gwpLogo} title="" info="" />
      <form onSubmit={handleSubmit}>
        <List />
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
        />
        <TextInput
          placeholder="Contraseña (Min. 8 caracteres, minús y mayús)"
          name="password"
          type="password"
          value={data.password}
          touched={touched.password}
          error={errors.password}
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
        <Button label="Enviar" type="submit" isFetching={isFetching} />
      </form>
    </Styles>
  );
}

async function apiRegister(dataUser) {
  let response = await fetch(`${url.base}${url.register}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(dataUser),
  });
  if (!response.ok) {
    if (response.status === 401) {
      toast.error('Contraseña no válida');
    }
    if (response.status === 422) {
      toast.error('La cuenta ya existe. Por favor haz login');
    }
  }
  let content = await response.text();
  return content;
}
