import React from 'react';

function Login() {
  let user = {};
  if (localStorage.getItem('Facebook2_user')) {
    user = JSON.parse(localStorage.getItem('Facebook2_user'));
    return (
      <div className="Login">
        <h1>Profile</h1>
        <img src={user.image} alt="link a la imagen roto" />
        <li>Name: </li>
        {user.name}
        <li>Email: </li>
        {user.email}
        <li>phone:</li>
        {user.phone}
      </div>
    );
  }
  return (
    <div className="Login">
      <h1>Profile</h1>
      <li>No estas logueado </li>
    </div>
  );
}
export default Login;
