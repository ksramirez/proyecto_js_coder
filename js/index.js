



const contenedorProductos = document.getElementById('contenedor-productos')

const contenedorCarrito = document.getElementById('carritoContenedor')

const botonVaciar = document.getElementById('vaciarCarrito')
const botonConfirmarCompra = document.getElementById('confirmarCompra')

const contadorCarrito = document.getElementById('contadorCarrito')

const cantidad = document.getElementById('cantidad')

const precioTotal = document.getElementById('precioTotal')

const cantidadTotal = document.getElementById('cantidadTotal')

const mostrarProducto= document.querySelector ('#mostrarProducto')







//ARRAY PRODUCTOS
const productos = [producto1, producto2, producto3, producto4, producto5,producto6,producto7, producto8]


//ARRAY CARRITO
let carrito= []



//GET LOCAL STORAGE
document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})




//VACIAR CARRITO
botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})




//CONFIRMAR COMPRA
botonConfirmarCompra.addEventListener('click', () => {
    const confirmaCompra = (carrito.length ===0) && alert("¡No hay productos en el Carrito!")
      

})






//PRODUCTOS
const productosContainer = document.querySelector('#productosContainer')

const renderizarProductos= () =>{

   productos.forEach ((producto) => {
    const nuevoDiv = document.createElement('div')
    nuevoDiv.innerHTML = `
            <img src="${producto.img}" class="box__img" alt="producto">
            <h1 class="box__title"> ${producto.pord} </h1>
            <p class="box__text" >${producto.descripcion}</p>
            <h2 class="Box_price">$ ${producto.precio}.-</h2>
            <button id="agregar${producto.id}" class="button">Añadir al Carrito <i class="fas fa-shopping-cart"></i></button>
    `
    nuevoDiv.className = 'box'
    productosContainer.append(nuevoDiv)


    const boton = document.getElementById(`agregar${producto.id}`)


    boton.addEventListener('click', () => {
        
    agregarAlCarrito(producto.id)
        
    })
})

//AGREGAR AL CARRITO
const agregarAlCarrito = (prodId) => {


    const AgregarCantidad = carrito.some (prod => prod.id === prodId) 

    if (AgregarCantidad){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else {

    const item = productos.find((prod) => prod.id === prodId)
    carrito.push(item)
    actualizarCarrito()
    console.log(carrito);}
    }
    
}

//ELIMINAR DEL CARRITO

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) 

    carrito.splice(indice, 1) 
    actualizarCarrito() 
    console.log(carrito)
}


const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = ""

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <img src="${prod.img}" class="carritoImg" alt="producto">
        <p>${prod.pord}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="botonEliminar"><i class="fas fa-trash"></i></button>
        `

        contenedorCarrito.appendChild(div)

        //SET LOCAL STORAGE
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })

    //CONTADOR DEL CARRITO
    contadorCarrito.innerText = carrito.length 
    //PRECIO TOTAL CARRITO
    precioTotal.innerText = carrito.reduce((acumulador, prod) => acumulador + prod.cantidad * prod.precio, 0)
    
}



mostrarProducto.addEventListener ('click', renderizarProductos)


