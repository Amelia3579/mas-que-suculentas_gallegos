import React from 'react'
import "./CartWidget.css";


const CartWidget = () => {
  const imgCarrito = "https://previews.123rf.com/images/yupiramos/yupiramos1705/yupiramos170514697/77979807-carrito-de-la-compra-s%C3%ADmbolo-icono-ilustraci%C3%B3n-vectorial-dise%C3%B1o-gr%C3%A1fico.jpg"

  return (
    <div>
        <img className='imgCarrito' src={imgCarrito} alt="Carrito de Compras" />
        <strong> 5 </strong>
    </div>
  )
}

export default CartWidget