import { useContext } from "react";
import CarritoContext from "../../context/CarritoContext";
import "./CartItem.css";

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);

  return (
    <div>
        <h3> {item.nombre} </h3>
        <p> Cantidad: {cantidad} </p>
        <p> Precio: ${item.precio} </p>
        <button className="estilosBotonLink" onClick={() => eliminarProducto(item.id)} >Eliminar</button>
        <hr />
    </div>
  )
}

export default CartItem