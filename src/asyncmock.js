const misProductos = [{
        id: "1",
        nombre: "Suculenta Rosario",
        precio: 1000,
        img: "../img/suculentaRosario.jpg",
        idCat: "Suculentas"
    },
    {
        id: "2",
        nombre: "Suculenta Oreja de Shrek",
        precio: 1500,
        img: "../img/orejaShrek.jpg",
        idCat: "Suculentas"
    },
    {
        id: "3",
        nombre: "Arbol de Jade",
        precio: 1200,
        img: "../img/arbolJade.jpg",
        idCat: "Cactus"
    },
    {
        id: "4",
        nombre: "Suculenta Cola de Burro",
        precio: 1250,
        img: "../img/suculentaColaDeBurro.jpg",
        idCat: "Cactus"
    }
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100)
    })
}

/*Actividad N°3: detalle del producto (parte I) */
export const getItem = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosCategoria = (idCat) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const prodCat = misProductos.filter(item => item.idCat === idCat);
            resolve(prodCat);
        }, 100)
    })
}