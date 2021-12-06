/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

function CrearUsuario() {
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { password, name, mail };
    console.log(user);

    fetch('https://repechaje-backend.herokuapp.com/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/JSON' },
      body: JSON.stringify(user),
    }).then(() => {
      console.log('Usuario Creado');
    });
  };

  return (
    <div>
      <h1>Crear usuario</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="mail"
            required
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" value="Crear usuario" />
        </div>
      </form>
    </div>
  );
}
export default CrearUsuario;
