import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { db } from "../../services/config";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const { idCat } = useParams();

  useEffect( () => {
    const misProductos = idCat ? query (collection(db, "productos"), where("idCat", "==", idCat)) : collection(db, "productos");
    
    getDocs(misProductos)
      .then(res => {
        const nuevosProductos = res.docs.map(doc => {
          const data = doc.data()
          return {id: doc.id, ...data}
        })
        setProductos(nuevosProductos);
      })
      .catch(error => console.log(error))
  }, [idCat]);

  return (
    <>
      <h2> Bienvenidos </h2>
      <h3> Te mostramos los productos que tenemos a la venta</h3>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
