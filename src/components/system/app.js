import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { GlobalStyle, theme } from '../../config/styled';
//import { NavBar, Footer } from '../organisms'

import Routes from './routes';

const App = () => (
  <>
    <ToastContainer
      autoClose={5000}
      hideProgressBar={false}
      bodyClassName="grow-font-size"
      draggable
      position={toast.POSITION.BOTTOM_CENTER}
    />
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Router>
        <ScrollToTop />
        <Routes />
      </Router>
    </ThemeProvider>
  </>
);

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default App;
