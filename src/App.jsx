import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import CartWidget from "./Components/CartWidget/CartWidget";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import "./App.css";

const App = () => {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="¡Bienvenido! Ahora podrás ver un listado de los productos que tenemos a la venta" />
    </>
  );
};

export default App;
