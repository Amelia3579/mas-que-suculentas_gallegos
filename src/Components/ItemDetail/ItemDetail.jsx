import "./ItemDetail.css"

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className="itemContainer">
        <h2> {nombre} </h2>
        <h3>Precio: ${precio} </h3>
        <h4>ID: {id} </h4>
        <img src={img} alt={nombre} />
        <p>Necesita riego moderado y luz indirecta</p>
    </div>
  )
}

export default ItemDetail