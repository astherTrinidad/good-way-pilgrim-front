import React from 'react';
import GlobalStyle from '../../../globalStyles'
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom'
import { Navbar } from '../../organisms'

const Dashboard = () => {
    return(
        <Router>
            <GlobalStyle />
            <Navbar/>
            <Switch>

            </Switch>
        </Router>
    )
}
export default Dashboard
