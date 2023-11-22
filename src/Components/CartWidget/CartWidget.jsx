import { useContext } from "react";
import CarritoContext from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import "./CartWidget.css";

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  const imgCarrito =
    "https://img.freepik.com/vector-gratis/ilustracion-compras-linea_53876-5906.jpg?w=740&t=st=1698526836~exp=1698527436~hmac=ebec953b4a7540acf05fa9648fda74ab84fa9456e312c83527b2c666d6683dcd";

  return (
    <div>
      <Link to="/cart">
        <img className="imgCarrito" src={imgCarrito} alt="Carrito de Compras" />
        {cantidadTotal > 0 && <strong> {cantidadTotal} </strong>}
      </Link>
    </div>
  );
};

export default CartWidget;
