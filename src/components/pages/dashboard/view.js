import React from 'react';
import GlobalStyle from '../../../globalStyles';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Navbar, Footer } from '../../organisms';

const Dashboard = () => {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch></Switch>
      <Footer />
    </Router>
  );
};
export default Dashboard;
