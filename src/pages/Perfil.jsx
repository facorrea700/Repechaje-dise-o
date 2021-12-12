import React from 'react';
import Post from '../components/Post';

function Login() {
  let user = {};
  if (localStorage.getItem('Facebook2_user')) {
    user = JSON.parse(localStorage.getItem('Facebook2_user'));
    return (
      <div className="Login">
        <h1>Perfil</h1>
        <li>Name: </li>
        {user.name}
        <li>Email: </li>
        {user.email}
        <Post nombre={user.name} />
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
