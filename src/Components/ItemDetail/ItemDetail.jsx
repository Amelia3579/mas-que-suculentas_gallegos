import { useState } from "react";
import Counter from "../Counter/Counter";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({ id, nombre, stock, precio, img }) => {
  const [agregarCant, setAgregarCant] = useState(0);

  const handleQuantity = (cantidad) => {
    setAgregarCant(cantidad);
    console.log(`Productos agregados: ${cantidad}`);
  };

  return (
    <div className="itemContainer">
      <h2> {nombre} </h2>
      <h3>Precio: ${precio} </h3>
      <h4>ID: {id} </h4>
      <img src={img} alt={nombre} />
      <p>Necesita riego moderado y luz indirecta</p>

      {agregarCant > 0 ? (<Link to={"/cart"}>Finalizar Compra</Link>) : (
        <Counter inicial={1} stock={stock} funcionAgregar={handleQuantity} />
      )}
    </div>
  );
};

export default ItemDetail;
