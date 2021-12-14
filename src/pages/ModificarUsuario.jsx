/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import axios from 'axios';

function ModificarUsuario() {
  const [name, setName] = useState('');
  const [email, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [image, setImage] = useState('');
  const [id, setId] = useState('');

  if (name === '') {
    const oldUser = JSON.parse(localStorage.getItem('Facebook2_user'));
    setId(oldUser.id);
    setName(oldUser.name);
    setMail(oldUser.email);
    setPhone(oldUser.phone);
    setImage(oldUser.image);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      id,
      name,
      email,
      phone,
      image,
    };

    axios
      .patch(`https://repechaje-backend.herokuapp.com/users/${user.id}`, user)
      .then((res) => {
        console.log(res);
        if (res.request.status === 201) {
          alert('usuario modificado');
          window.location.href = '/perfil';
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h1>Modify user</h1>
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
            type="text"
            value={phone}
            autoComplete="email"
            placeholder="phone"
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            type="text"
            value={image}
            placeholder="image"
            onChange={(e) => setImage(e.target.value)}
          />
          <input type="submit" value="Modify user" />
        </div>
      </form>
    </div>
  );
}
export default ModificarUsuario;
