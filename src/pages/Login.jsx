import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function Login() {
  const [password, setPassword] = useState('');
  const [email, setMail] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { password, email };

    axios.post('https://repechaje-backend.herokuapp.com/auth', user)
      .then((res) => {
        console.log(res);
        if (res.request.status === 201) {
          // alert('usuario logueado');
          localStorage.setItem('Facebook2_user', JSON.stringify(res.data));
          history.push('/perfil');
        }
      })
      .catch((err) => {
        if (err.request.status === 401) {
          alert('usuario o contraseña incorrecta');
        }
      });
  };

  return (
    <div>
      <h1>Login</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="email"
          required
          value={email}
          placeholder="email"
          onChange={(e) => setMail(e.target.value)}
        />
        <input
          type="password"
          required
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}
export default Login;
