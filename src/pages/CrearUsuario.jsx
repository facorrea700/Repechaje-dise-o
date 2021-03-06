/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';

function CrearUsuario() {
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { password, name, email };

    axios
      .post('https://repechaje-backend.herokuapp.com/users', user)
      .then((res) => {
        console.log(res);
        if (res.request.status === 201) {
          alert('usuario creado');
          window.location.href = '/';
        }
      })
      .catch((err) => {
        if (err.response.status === 409) {
          alert('Conflicto, mail ya utilizado');
        }
      });
  };

  return (
    <div>
      <h1>Create user</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form">
          <input
            type="text"
            required
            value={name}
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
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
          <input type="submit" value="Create user" />
          <a href="/login">Already registered?</a>
        </div>
      </form>
    </div>
  );
}
export default CrearUsuario;
