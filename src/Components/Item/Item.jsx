import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ id, nombre, precio, img }) => {
  return (
    <div className="cardProducto">
      <img src={img} alt={nombre} />
      <h3> {nombre} </h3>
      <p>Precio: ${precio} </p>
      <p>ID: {id} </p>
      <button>
        <Link className="estilosLink" to={`/item/${id}`}> Ver Detalles </Link>
      </button>
    </div>
  );
};

export default Item;
