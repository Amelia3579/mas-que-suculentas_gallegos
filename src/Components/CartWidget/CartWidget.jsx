import React from 'react'
import "./CartWidget.css";


const CartWidget = () => {
  const imgCarrito = "https://img.freepik.com/vector-gratis/ilustracion-compras-linea_53876-5906.jpg?w=740&t=st=1698526836~exp=1698527436~hmac=ebec953b4a7540acf05fa9648fda74ab84fa9456e312c83527b2c666d6683dcd"

  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
        <strong> 5 </strong>
    </div>
  )
}

export default CartWidget