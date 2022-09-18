
//PRODUCTS
class Product {
    constructor(id,tipo,prod, descripcion, precio,img,cantidad) {
        this.id=id
        this.tipo=tipo
        this.pord = prod
        this.descripcion = descripcion
        this.precio = precio   
        this.img= img
        this.cantidad= cantidad
    }
}

const producto1 = new Product('001','vela', 'Vela envase Vidrio','Hecha con cera de soja orgánica y esencias naturales.', 2000,'./img/product1.jpg','1')
const producto2 = new Product('002','vela','Vela envase Cerámica','Hecha con cera de soja orgánica y esencias naturales.', 2000,'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/174/623/products/2-velas-marmol-pagina1-a5f4200c316521cfc516051141793260-480-0.png','1')
const producto3= new Product('003','vela','Vela Bubble', 'Hecha con cera de soja orgánica y esencias naturales.', 2000,'https://i.etsystatic.com/34861642/r/il/976442/3915568486/il_340x270.3915568486_thfh.jpg','1')
const producto4 = new Product('004','vela','Vela Bubble Cube', 'Hecha con cera de soja orgánica y esencias naturales.', 2000,'https://dojiw2m9tvv09.cloudfront.net/27166/product/M_99726572-14522301558233.jpg?46','1')
const producto5 = new Product('005','difusor','Difusor Cerámico','Hechos con aceites naturales y alcohol de cereal. Envase de Cerámica', 2000,'https://http2.mlstatic.com/D_NQ_NP_875183-MLA48588065675_122021-O.jpg','1')
const producto6 = new Product('006','difusor','Difusor Vidrio','Hechos con aceites naturales y alcohol de cereal. Envase de Vidrio', 2000,'https://d22fxaf9t8d39k.cloudfront.net/daabcafb98ed7508d8d0ffe4626c68b2a957376b33d2df7978b634365a5d8fa224600.png','1')
const producto7 = new Product('007','perla','Perlas Aromaticas', 'Hechos con bizcocho de cerámica y esencias.', 1800,'https://mercadopax.com.ar/wp-content/uploads/2019/12/perlitas-bohemia-4.jpg"','1')
const producto8 = new Product('008','perla','Perlas Aromaticas',  'Hechos con bizcocho de cerámica y esencias.', 1800,'https://bohemiavelas.com.ar/wp-content/uploads/2021/06/perlitas-ceramica-perfumadas-bomehia-velas-aromas.jpg','1')
