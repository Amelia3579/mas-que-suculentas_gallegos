import { useState, useEffect } from "react";
import { getItem } from "../../asyncmock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState(null);

  const {idItem} = useParams();

  useEffect(() => {
    getItem(idItem)
      .then((respuesta) => setProducto(respuesta));
  }, [idItem]);

  return (
    <div>
      <ItemDetail {...producto} />
    </div>
  );
};

export default ItemDetailContainer;
