import React from "react"
import NavBar from "./Components/NavBar/NavBar"
import CartWidget from "./Components/CartWidget/CartWidget"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer"


const App = () => {
  

  return (
    <>
     
     <NavBar/>
     <ItemListContainer greeting = "Bienvenido a la tienda de suculentas y más!!!" />

    </>
  )
}

export default App
