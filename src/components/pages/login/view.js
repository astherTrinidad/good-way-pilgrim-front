import React, { useState, useEffect, useCallback } from 'react';
import isEmpty from 'lodash/isEmpty'; //lodash->ayuda a trabajar con arrays.comprueba si un objeto, colleción.. es vacío
import some from 'lodash/some'; //verificamos los elementos de un array
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';

import { TextInput, Button, FormHeader, List } from '../../atoms/';
import { validateEmail, validatePassword } from '../../../utils';
import gwpLogo from '../../../assets/images/gwp-blanco-logo.png';
import Styles from './styled';
import 'react-toastify/dist/ReactToastify.css';
import  url from '../../../config/url' 

export default function Login() {
  const history = useHistory();

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

    if (!data.email) newErrors.email = 'Campo obligatorio';
    else if (!validateEmail(data.email)) newErrors.email = 'Email inválido';

    if (!data.password) newErrors.password = 'Campo obligatorio';
    //else if (!validatePassword(data.password)) newErrors.password = 'Contraseña debe tener mínimo 8 caracteres'

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

  /**
   * Creamos un controlador de envío de formulario que llamará a loginUser con user y pass
   */
  const handleSubmit = async e => {
    e.preventDefault();
    const invalidForm = some(errors, error => !isEmpty(error));
    if (!invalidForm) {
      console.log(data);
      try {
        setIsfetching(true);
        const response = await apiLoginUser(data);
        console.log('***'+response.token)
        sessionStorage.setItem('token', response.token); 
        
        toast.success('¡Bienvenido/a!');
        history.replace('/meProfile');
      } catch (e) {
        setIsfetching(false);
        toast.error('Usuario y/o contraseña incorrectos');
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
        <Button label="Enviar" type="submit" isFetching={isFetching} />
      </form>
    </Styles>
  );
}

async function apiLoginUser(credentials) {

  return fetch(`${url.base}${url.login}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then(data => data.json());
}
