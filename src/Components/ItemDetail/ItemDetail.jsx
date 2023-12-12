import { useState } from "react";
import Counter from "../Counter/Counter";
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/CarritoContext";
import { useContext } from "react";
import "./ItemDetail.css";

const ItemDetail = ({ id, nombre, stock, precio, img }) => {
  const [agregarCant, setAgregarCant] = useState(0);

  const { agregarAlCarrito } = useContext(CarritoContext);

  const handleQuantity = (cantidad) => {
    setAgregarCant(cantidad);

    const item = { id, nombre, precio };
    agregarAlCarrito(item, cantidad);
  };

  return (
    <div className="itemContainer">
      <h3> {nombre} </h3>
      <h3>Precio: ${precio} </h3>
      <p>ID: {id} </p>
      <p>STOCK: {stock} </p>
      <img src={img} alt={nombre} />
      <p>Necesita riego moderado y luz indirecta</p>

      {agregarCant > 0 ? (
        <div className="estilosLink">
          <Link className="estilosBotonLink" to={"/"}>
            Seguir Viendo
          </Link>
          <Link className="estilosBotonLink" to={"/cart"}>
            Finalizar Compra
          </Link>
        </div>
      ) : (
        <Counter inicial={1} stock={stock} funcionAgregar={handleQuantity} />
      )}
    </div>
  );
};

export default ItemDetail;
