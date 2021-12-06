import React, { useState } from 'react';

function CrearUsuario() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Crear usuario</h1>
      <form className="form" onSubmit="">
        <div>
          <input type="text" className="form-control" id="name" placeholder="Name" />
          <input type="email" className="form-control" id="email" placeholder="Email" />
          <input type="password" className="form-control" id="password" placeholder="Password" />
          <input type="submit" className="btn btn-primary" value="Crear" onClick={() => setCount(count + 1)} />

        </div>
      </form>
    </div>
  );
}
export default CrearUsuario;
