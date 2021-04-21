import React, { useState, useEffect, useCallback } from 'react'
import isEmpty from 'lodash/isEmpty'
import some from 'lodash/some'
import { toast } from 'react-toastify'
import { useHistory } from 'react-router-dom'


import { TextInput, Button, FormHeader, List } from '../../atoms/'
import { validateEmail, validatePassword } from '../../../utils'
import useToken from '../../system/useToken'
import gwpLogo from '../../../assets/images/gwp-blanco-logo.png'
import Styles from './styled'

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

const Register = () => {

  const {setToken} = useToken();
  const history = useHistory();

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    passwordConfirm: false,

  })

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  })

  const [isFetching, setIsfetching] = useState(false)

  const validate = useCallback(() => {
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirm: '',
    }

    if (!data.firstName) newErrors.firstName = 'Campo obligatorio'

    if (!data.lastName) newErrors.lastName = 'Campo obligatorio'

    if (!data.email) newErrors.email = 'Campo obligatorio'
    else if (!validateEmail(data.email)) newErrors.email = 'Email inválido'

    if (!data.password) newErrors.password = 'Campo obligatorio'
    else if (!validatePassword(data.password)) newErrors.password = 'Contraseña debe tener mínimo 8 caracteres'

    if(!data.passwordConfirm) newErrors.passwordConfirm = 'Campo obligatorio'
    else if(data.password !== data.passwordConfirm) newErrors.passwordConfirm = 'Contraseña no coincide'

    setErrors(newErrors)
  }, [data])

  useEffect(() => {
    validate()
  }, [data, validate])

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    })
  }

  const handleBlur = event => {
    setTouched({
      ...touched,
      [event.target.name]: true,
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const invalidForm = some(errors, error => !isEmpty(error))
    if (!invalidForm) {
      console.log({ data })
      try {
        setIsfetching(true)
        const token = await loginUser({
          data
        });
        setToken(token);
        toast.success('Gracias por registrarte!!!')
        history.replace('/dashboard')
      } catch(e) {
        setIsfetching(false)
        toast.error('Ha ocurrido un error')
      }
    } else {
      setTouched({
        firstName: true,
        lastName: true,
        email: true,
        password: true,
        passwordConfirm: true,
      })
    }
  }

  return (
    <Styles>
      <FormHeader logo={gwpLogo} title='' info='' />
      <form onSubmit={handleSubmit}>
        <List/>
        <TextInput
          placeholder='Nombre'
          name='firstName'
          type='text'
          value={data.firstName}
          touched={touched.firstName}
          error={errors.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextInput
          placeholder='Apellidos'
          name='lastName'
          type='text'
          value={data.lastName}
          touched={touched.lastName}
          error={errors.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        
        <TextInput
          placeholder='Email'
          name='email'
          type='email'
          value={data.email}
          touched={touched.email}
          error={errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextInput
          placeholder='Contraseña'
          name='password'
          type='password'
          value={data.password}
          touched={touched.password}
          error={errors.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextInput
          placeholder='Confirme su contraseña'
          name='passwordConfirm'
          type='password'
          value={data.passwordConfirm}
          touched={touched.passwordConfirm}
          error={errors.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Button label='Enviar' type="submit" isFetching={isFetching} />
      </form>
    </Styles>
  )
}

export default Register