import { useContext } from "react";
import CarritoContext from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css";


const Cart = () => {
    const {carrito, vaciarCarrito, cantidadTotal, total} = useContext(CarritoContext);

    if(cantidadTotal === 0) {
        return (
            <div className="estilosCart" >
                <h3>Tu carrito está sin productos</h3>
                <Link className="estilosBotonLink" to="/">Ver productos</Link>
            </div>
        )
    }

  return (
    <div className="estilosCart">
        <h2>Resumen de tu Compra</h2>
        {
            carrito.map(producto => <CartItem key={producto.item.id} {...producto} /> )
        }
        <h3>Total: ${total} </h3>
        <h3>Cantidad Total: {cantidadTotal} </h3>
        <Link className="estilosBotonLink" onClick={()=> vaciarCarrito()} > Vaciar Carrito </Link>
        <Link className="estilosBotonLink" to="/checkout">Finalizar Compra</Link>
    </div>
  ) 
}

export default Cart