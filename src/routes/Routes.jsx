import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import NavBar from '../components/NavBar';
import About from '../pages/About';
import NavRouter from './NavRouter';
import Perfil from '../pages/Perfil';
import CrearUsuario from '../pages/CrearUsuario';
import Login from '../pages/Login';

const Routes = () => (
  <Switch>
    <NavRouter path="/about">
      <About />
    </NavRouter>
    <NavRouter path="/login">
      <Login />
    </NavRouter>
    <NavRouter path="/perfil">
      <Perfil />
    </NavRouter>
    <NavRouter path="/crearUsuario">
      <CrearUsuario />
    </NavRouter>
    <Route path="/">
      <NavBar />
      <App />
    </Route>
  </Switch>
);

export default Routes;
