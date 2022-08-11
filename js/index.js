


//Productos
class Product {
    constructor(prod, descripcion, precio,img) {
     
        this.pord = prod
        this.descripcion = descripcion
        this.precio = precio   
        this.img= img
    }

}

const producto1 = new Product('Velas de Cera de Soja','Hecha con cera de soja orgánica y esencias naturales.', 2000,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJesEcuA365oj5CsF__ZMlwtuWe3H4qlZ3dQ&usqp=CAU')
const producto2 = new Product('Velas de Cera de Soja','Hecha con cera de soja orgánica y esencias naturales.', 2000,'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/174/623/products/2-velas-marmol-pagina1-a5f4200c316521cfc516051141793260-480-0.png')
const producto3= new Product('Velas de Cera de Soja', 'Hecha con cera de soja orgánica y esencias naturales.', 2000,'https://i.etsystatic.com/34861642/r/il/976442/3915568486/il_340x270.3915568486_thfh.jpg')
const producto4 = new Product('Velas de Cera de Soja', 'Hecha con cera de soja orgánica y esencias naturales.', 2000,'https://dojiw2m9tvv09.cloudfront.net/27166/product/M_99726572-14522301558233.jpg?46')
const producto5 = new Product('Difusores','Hechos con aceites naturales y alcohol de cereal. Envase de Cerámica', 2000,'https://http2.mlstatic.com/D_NQ_NP_875183-MLA48588065675_122021-O.jpg')
const producto6 = new Product('Difusores','Hechos con aceites naturales y alcohol de cereal. Envase de Vidrio', 2000,'https://d22fxaf9t8d39k.cloudfront.net/daabcafb98ed7508d8d0ffe4626c68b2a957376b33d2df7978b634365a5d8fa224600.png')
const producto7 = new Product('PerlasAromaticas', 'Hechos con bizcocho de cerámica y esencias.', 1800,'https://mercadopax.com.ar/wp-content/uploads/2019/12/perlitas-bohemia-4.jpg"')
const producto8 = new Product('PerlasAromaticas',  'Hechos con bizcocho de cerámica y esencias.', 1800,'https://bohemiavelas.com.ar/wp-content/uploads/2021/06/perlitas-ceramica-perfumadas-bomehia-velas-aromas.jpg')


const productos = [producto1, producto2, producto3, producto4, producto5,producto6,producto7, producto8]


const productosContainerQuery = document.querySelector('#productosContainer')

const renderizarProductos= () =>{

   productos.forEach((producto) => {
    const nuevoDiv = document.createElement('div')
    nuevoDiv.innerHTML = `
            <img src="${producto.img}" class="box__img" alt="producto">
            <h1 class="box__title"> ${producto.pord} </h1>
            <p class="box__text" >${producto.descripcion}</p>
            <h2 class="Box_price">${producto.precio}</h2>
            <button class="button">Comprar</button>
    `
    nuevoDiv.className = 'box'
    productosContainerQuery.append(nuevoDiv)
})
 
}

const mostrarProducto= document.querySelector ('#mostrarProducto')

mostrarProducto.addEventListener ('click', renderizarProductos)
