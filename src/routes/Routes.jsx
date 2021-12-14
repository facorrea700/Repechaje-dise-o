import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from '../App';
import NavBar from '../components/NavBar';
import About from '../pages/About';
import NavRouter from './NavRouter';
import Perfil from '../pages/Perfil';
import CrearUsuario from '../pages/CrearUsuario';
import Login from '../pages/Login';
import CrearPost from '../pages/CrearPost';
import ModificarPost from '../pages/ModificarPost';
import ModificarUsuario from '../pages/ModificarUsuario';

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
    <NavRouter path="/crearPost">
      <CrearPost />
    </NavRouter>
    <NavRouter path="/modificarPost">
      <ModificarPost />
    </NavRouter>
    <NavRouter path="/modificarUsuario">
      <ModificarUsuario />
    </NavRouter>
    <Route path="/">
      <NavBar />
      <App />
    </Route>
  </Switch>
);

export default Routes;
