import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img, stock }) => {
  return (
    <div className="cardContenedor">
      <section className="cardProducto">
        <img src={img} alt={nombre} />
        <h3> {nombre} </h3>
        <p>Precio: ${precio} </p>
        <p>ID: {id} </p>
        <p>STOCK: {stock} </p>
        <button>
          <Link className="estilosNavLink" to={`/item/${id}`}>
            Ver Detalles
          </Link>
        </button>
      </section>
    </div>
  );
};

export default Item;
