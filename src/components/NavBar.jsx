import React from 'react';

const NavBar = () => (
  <div>
    <h1>Facebook 2</h1>
    <div>
      <ul className="ul-navbar">
        <li className="li-navbar">
          <a className="a-navbar" href="/">Home</a>
        </li>
        <li className="li-navbar">
          <a className="a-navbar" href="/perfil">Profile</a>
        </li>
        <li className="li-navbar">
          <a className="a-navbar" href="/crearPost">Create Post</a>
        </li>
      </ul>
    </div>
  </div>
);

export default NavBar;
