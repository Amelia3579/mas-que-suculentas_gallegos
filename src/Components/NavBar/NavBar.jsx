import React from 'react'
import CartWidget from '../CartWidget/CartWidget';
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <h1>Mas que Suculentas</h1>

      <nav>
        <ul>
          <li>Suculentas</li>
          <li>Cactus</li>
          <li>Aromáticas</li>
        </ul>
      </nav>

      <CartWidget/>
    </header>
  )
}

export default NavBar