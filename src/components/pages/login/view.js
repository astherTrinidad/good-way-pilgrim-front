import React, { useState, useEffect, useCallback } from 'react';
import isEmpty from 'lodash/isEmpty'; //lodash->ayuda a trabajar con arrays.comprueba si un objeto, colleción.. es vacío
import some from 'lodash/some'; //verificamos los elementos de un array
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { TextInput, Button, FormHeader, List } from '../../atoms/';
import { validateEmail } from '../../../utils';
import gwpLogo from '../../../assets/images/gwp-blanco-logo.png';
import Styles from './styled';
import 'react-toastify/dist/ReactToastify.css';
import url from '../../../config/url';
import appRoutes from '../../../config/appRoutes';

export default function Login() {
  const [userData, setUserData] = useState({});
  const history = useHistory();
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const [touched, setTouched] = useState({
    email: false,
    password: false,
  });

  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const [isFetching, setIsfetching] = useState(false);

  const validate = useCallback(() => {
    const newErrors = {
      email: '',
      password: '',
    };
    if (!validateEmail(data.email)) newErrors.email = 'Email inválido';

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
    var invalidForm = some(errors, error => !isEmpty(error));
    if (!invalidForm) {
      try {
        setIsfetching(true);
        var datos = await apiLoginUser(data);
        datos = JSON.parse(datos);
        if (datos.message === 'success') {
          sessionStorage.setItem('token', datos.token);
          toast.success('¡Bienvenido/a!');
          console.log(data.name);
          console.log(data.achievement);

          datos = await apiMeProfile();
          if (datos.message === undefined) {
            setUserData(datos);
          }

          const achievementUserLength =
            datos.achievements.length !== 0 || datos.paths.length !== 0
              ? history.replace(appRoutes.meProfileData)
              : history.replace(appRoutes.meProfile);
        }

        setIsfetching(false);
      } catch (e) {
        toast.error('Error del servidor. Inténtelo más tarde');
        setIsfetching(false);
      }
    } else {
      setTouched({
        email: true,
        password: true,
      });
    }
  };
  return (
    <Styles>
      <FormHeader logo={gwpLogo} title="" info="" />
      <form onSubmit={handleSubmit}>
        <List />
        <TextInput
          id="email"
          placeholder="Email"
          name="email"
          type="email"
          value={data.email}
          touched={touched.email}
          error={errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
          accesskey="e"
        />
        <TextInput
          id="password"
          placeholder="Contraseña"
          name="password"
          type={passwordShown ? 'text' : 'password'}
          value={data.password}
          touched={touched.password}
          error={errors.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <i
          className={`fa ${passwordShown ? 'fa-eye-slash' : 'fa-eye'} `}
          onClick={togglePasswordVisiblity}
        ></i>
        <Button label="Enviar" type="submit" isFetching={isFetching} />
      </form>
    </Styles>
  );
}

async function apiLoginUser(credentials) {
  let response = await fetch(`${url.base}${url.login}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (response.status === 401) {
    toast.error('Usuario o contraseña incorrectos');
  }
  let content = await response.text();

  return content;
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
