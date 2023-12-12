import { useState } from "react";
import "./Counter.css";

const Counter = ({inicial, stock, funcionAgregar})  => {
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

export default Counter