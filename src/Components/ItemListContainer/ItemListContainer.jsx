import { useState, useEffect } from "react";
import { getProductos, getProductosCategoria } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idCat } = useParams();

  useEffect(() => {
    const functionProductos = idCat ? getProductosCategoria : getProductos;

    functionProductos(idCat)
      .then((respuesta) => setProductos(respuesta));
  }, [idCat]);

  return (
    <>
      <h2> Bienvenidos </h2>
      <h3> Te presentamos los productos que tenemos a la venta</h3>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
