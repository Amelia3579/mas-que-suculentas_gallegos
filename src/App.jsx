import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import CartWidget from "./Components/CartWidget/CartWidget";
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:idCat" element={<ItemListContainer />} />
          <Route path="/item/:idItem" element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
