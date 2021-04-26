import React from 'react';
import { TextField, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Navbar, Footer } from '../../organisms/';
import Grid from '@material-ui/core/Grid';

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
} from './styled';
import { TextInput } from '../../atoms';
import GlobalStyle from '../../../globalStyles';
import dropMeEditProfile from '../../../assets/images/gota-show-profile.png';
import { pink } from '@material-ui/core/colors';
//{userData?.surname}
//{userData?.newPassword}

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    fontSize: '1em',
  },
  form: {
    marginTop: theme.spacing(3),
  },
  typography: {
    fontFamily: 'Poppins',
    fontSize: '1em',
  },
  outlinedInput: {
    fontSize: '1em',
    color: '#545454',
  },
  textField: {
    width: '100',
    color: '#545454',
  },
}));

const MeEditProfile = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <div>
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
              <NameProfile>Nombre</NameProfile>
              <SurnameProfile>Apellidos</SurnameProfile>
            </ContainerName>
            <Row>
              <FormEdit>
                <Grid>
                  <Box m={2}>
                    <TextField
                      fullWidth
                      color="primary"
                      id="name"
                      label="Nombre"
                      defaultValue="Nombre" //{userData?.name}
                      type="text"
                      variant="outlined"
                      aria-label="Nombre"
                      aria-required="true"
                      autoFocus
                      // touched={touched.name}
                      // error={errors.name}
                      //onChange={handleChange}
                      // onBlur={handleBlur}
                    />
                  </Box>
                  <Box m={2}>
                    <TextField
                      placeholder="Apellidos"
                      id="surname"
                      label="Apellidos"
                      defaultValue="Apellidos" //{userData?.surname}
                      type="text"
                      variant="outlined"
                      fullWidth
                      // touched={touched.name}
                      // error={errors.name}
                      //onChange={handleChange}
                      // onBlur={handleBlur}
                    />
                  </Box>
                </Grid>

                <Box m={2}>
                  <TextField
                    placeholder="Email"
                    id="email"
                    label="Email"
                    defaultValue="email" //{userData?.email}
                    type="email"
                    variant="outlined"
                    // touched={touched.name}
                    // error={errors.name}
                    //onChange={handleChange}
                    // onBlur={handleBlur}
                    fullWidth
                    disabled
                  />
                </Box>

                <Box m={2}>
                  <TextField
                    id="oldPassword"
                    placeholder="Contraseña actual"
                    name="oldPassword"
                    type="password"
                    variant="outlined"
                    label="Contraseña actual"
                    defaultValue="" //{userData?.email}
                    //value={userData?.oldPassword}
                    // touched={touched.currentPassword}
                    // error={errors.currentPassword}
                    //onChange={handleChange}
                    // onBlur={handleBlur}
                    fullWidth
                  />
                </Box>
                <FormControl variant="outlined">
                  <InputLabel htmlFor="newPassword">
                    Nueva contraseña
                  </InputLabel>
                  <Box>
                    <OutlinedInput
                      id="newPassword"
                      type={values.showPassword ? 'text' : 'password'}
                      value={values.newPassword}
                      onChange={handleChange('password')}
                      className={classes.outlinedInput}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {values.showPassword ? (
                              <Visibility />
                            ) : (
                              <VisibilityOff />
                            )}
                          </IconButton>
                        </InputAdornment>
                      }
                      labelWidth={140}
                      fullWidth
                    />
                  </Box>
                </FormControl>

                {/* <TextInput
                  placeholder="Nueva Contraseña"
                  name="newPassword"
                  type="password"
                  //value=
                  // touched={touched.nuevaPassword}
                  // error={errors.nuevaPassword}
                  //onChange={handleChange}
                  // onBlur={handleBlur}
                /> */}
                <TextInput
                  placeholder="Confirme su contraseña"
                  name="passwordConfirm"
                  type="password"
                  //value={data.passwordConfirm}
                  // touched={touched.passwordConfirm}
                  // error={errors.passwordConfirm}
                  //onChange={handleChange}
                  // onBlur={handleBlur}
                />
                <Row>
                  <ButtonDelete
                    label="Eliminar cuenta"
                    name="Eliminar cuenta"
                    id="delete"
                    type="submit"
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
                </Row>
              </FormEdit>
            </Row>
          </ColumnText>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default MeEditProfile;
