import React, { useState, useEffect, useCallback } from 'react';
import isEmpty from 'lodash/isEmpty';
import some from 'lodash/some';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import { TextInput, Button, FormHeader, List } from '../../atoms/';
import { validateEmail, validatePassword } from '../../../utils';
import useToken from '../../system/useToken';
import gwpLogo from '../../../assets/images/gwp-blanco-logo.png';
import Styles from './styled';

async function loginUser(credentials) {
  return fetch('http://localhost:8000/pub/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then(data => data.json());
}

const Register = () => {
  //  const { setToken } = useToken();
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
        const respuesta = await loginUser(data); //data: @ y pass
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
        <p>{localStorage.getItem('id')}</p>
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
          placeholder="Contraseña"
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
};

export default Register;
