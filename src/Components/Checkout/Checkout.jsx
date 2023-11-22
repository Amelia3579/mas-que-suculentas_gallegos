import { useState, useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { db } from "../../services/config";
import { collection, addDoc, getDoc, doc, updateDoc } from "firebase/firestore";
import "./Checkout.css";

const Checkout = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [emailConfir, setEmailConfir] = useState("");
  const [error, setError] = useState("");
  const [ordenId, setOrdenId] = useState("");

  const { carrito, vaciarCarrito, total, cantidadTotal } =
    useContext(CarritoContext);

  const handleForm = (e) => {
    e.preventDefault();
    setNombre("");
    setApellido("");
    setTelefono("");
    setEmail("");
    setEmailConfir("");

    if (!nombre || !apellido || !telefono || !email || !emailConfir) {
      setError("Todos los campos tienen que estar completos");
      return;
    }

    if (email !== emailConfir) {
      setError("Los email tienen que coincidir");
      return;
    }

    const orden = {
      items: carrito.map((producto) => ({
        id: producto.item.id,
        nombre: producto.item.nombre,
        cantidad: producto.cantidad,
      })),
      total: total,
      fecha: new Date(),
      nombre,
      apellido,
      telefono,
      email,
    };

    Promise.all(
      orden.items.map(async (productoOrden) => {
        const productoRef = doc(db, "productos", productoOrden.id);
        const productoDoc = await getDoc(productoRef);
        const stockActual = productoDoc.data().stock;

        await updateDoc(productoRef, {
          stock: stockActual - productoOrden.cantidad,
        });
      })
    )
      .then(() => {
        addDoc(collection(db, "ordenes"), orden)
          .then((docRef) => {
            setOrdenId(docRef.id);
            vaciarCarrito();
          })
          .catch((error) => {
            console.log("Error al crear la orden", error);
            setError("Se produjo un error al crear la orden");
          });
      })
      .catch((error) => {
        console.log("No se pudo actualizar el stock", error);
        setError(
          "No se puede actualizar el stock, intente en la tienda personalmente"
        );
      });
  };

  return (
    <div className="fondo">
      <section className="posicionFondo">
        <h2>Checkout</h2>

        <form onSubmit={handleForm}>
          {carrito.map((producto) => (
            <div key={producto.item.id}>
              <p>
                {" "}
                {producto.item.nombre} x {producto.cantidad}{" "}
              </p>
              <p> $ {producto.item.precio} </p>
              <hr />
            </div>
          ))}
          <h4>Completá con tus datos para poder confirmar la compra</h4>

          <div className="estilos">
            <label htmlFor="nombre">Nombre</label>
            <input
              type="text"
              onChange={(e) => setNombre(e.target.value)}
              value={nombre}
              id="nombre"
              style={{textTransform:"lowercase"}}
            />

            <label htmlFor="apellido">Apellido</label>
            <input
              type="text"
              onChange={(e) => setApellido(e.target.value)}
              value={apellido}
              id="apellido"
              style={{textTransform:"lowercase"}}
            />

            <label htmlFor="celular">Teléfono</label>
            <input
              type="number"
              onChange={(e) => setTelefono(e.target.value)}
              value={telefono}
              id="telefono"
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              id="email"
              style={{textTransform:"lowercase"}}
              placeholder="meli@yahoo.com"
            />

            <label htmlFor="email">Email Confirmación</label>
            <input
              type="email"
              onChange={(e) => setEmailConfir(e.target.value)}
              value={emailConfir}
              id="emailConfir"
              style={{textTransform:"lowercase"}}
              placeholder="meli@yahoo.com"
            />

            {error && <p style={{ color:"green"}}> {error} </p>}

            {ordenId == 0 ? (
              <button type="submit" className="estilosBotonLink">
                Confirmar Compra
              </button>
            ) : (
              < >
                <h3>Ya está lista tu Compra. Muchas Gracias!!! </h3>
                <p className="estilosP"> Tu número de comprobante es : {ordenId} </p>
              </>
            )}
          </div>
        </form>
      </section>
    </div>
  );
};

export default Checkout;
