import { useState } from "react";
import "./Counter.css";

<<<<<<< HEAD
const Counter = ({inicial, stock, funcionAgregar}) => {
=======
const Contador = ({inicial, stock, funcionAgregar}) => {
>>>>>>> 7dfe8fa7e0dc9f3733a2e8880f273f5489be2490
  const [contador, setContador] = useState(inicial);

  const sumarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restarContador = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <div className="estilosContador">
        <button className="estilosBotonAcc" onClick={restarContador}> - </button>
        <strong className="estilosBotonCont"> {contador} </strong>
        <button  className="estilosBotonAcc" onClick={sumarContador}> + </button>
      </div>
      <button className="estilosBotonComprar" onClick={() => funcionAgregar(contador)}>
        Agregar al Carrito
      </button>
    </>
  );
};

export default Counter;
