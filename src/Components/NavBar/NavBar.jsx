import { Link, NavLink } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header>
      <Link className="estilosLink" to="/">
        <h1>Mas que Suculentas</h1>
        <img className="estilosLogo" src={"../img/logo.jpg"} alt="Suculentas y Cactus"/>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink className="estilosNavLink" to="categoria/Suculentas">Suculentas</NavLink>
          </li>
          <li>
            <NavLink className="estilosNavLink" to="categoria/Cactus">Cactus</NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
