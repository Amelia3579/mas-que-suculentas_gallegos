const misProductos = [{
        id: 1,
        nombre: "Suculenta Rosario",
        precio: 1000,
        img: "./img/suculentaRosario.jpg"
    },
    {
        id: 2,
        nombre: "Suculenta Oreja de Shrek",
        precio: 1500,
        img: "./img/orejaShrek.jpg"
    },
    {
        id: 3,
        nombre: "Arbol de Jade",
        precio: 1200,
        img: "./img/arbolJade.jpg"
    },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 2000)
    })
}