import React from 'react';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form className="form">
        <input type="email" id="email" placeholder="Email" />
        <input type="password" id="password" placeholder="Password" />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
export default Login;
