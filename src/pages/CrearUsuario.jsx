import React from 'react';
import axios from 'axios';

function loguear() {
  (async () => {
    // POST request using axios with async/await
    const element = document.querySelector('#post-request-async-await .article-id');
    const article = { title: 'Axios POST Request Example' };
    const response = await axios.post('https://reqres.in/api/articles', article);
    element.innerHTML = response.data.id;
  })();
}

function CrearUsuario() {
  return (
    <div>
      <h1>Crear usuario</h1>
      <form className="form" onSubmit="loguear()">
        <div>
          <input type="email" className="form-control" id="email" />
          <input type="text" className="form-control" id="name" />
          <input type="password" className="form-control" id="password" />
          <input type="submit" className="btn btn-primary" value="Crear" />
        </div>
      </form>
    </div>
  );
}
export default CrearUsuario;
