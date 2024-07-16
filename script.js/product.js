const listaProduct = [
    {
     id : 1,
     nombre: "LuxuryGemsNecklace",
     codigo: 100,
     precioUnitario: 168.76,
     imagenes: ["/assets/Image_PageII/Images_sectionII/Image 2 (8).svg" ],
    tipoDeAccesorio : "collar",
    descripcion :" collar de lujo",
    stock :[
    {
        talla: "48",
        cantidad: 10,
        color: "white",
    },
    {
        talla: "50",
        cantidad: 13,
        color: "black",
    }
]
},

{
    id : 2,
    nombre: "Reflections Necklace",
    codigo: 200,
    precioUnitario: 620.76,
    talla: "s",
    imagenes: ["/assets/Image_PageII/Images_sectionII/Image 2 (1).svg" ],
   tipoDeAccesorio : "collar ",
   descripcion :"collar reflejos ",
   stock :[
   {
       talla: "m",
       cantidad: 10,
       color: "white",
   },
   {
       talla: "S",
       cantidad: 1,
       color: "black",
   }
]
},

{
    id : 3,
    nombre: "Dreamy Infinity Ring",
    codigo: 300,
    precioUnitario: 327.71,
    talla: "50",
    imagenes: ["/assets/Image_PageII/Images_sectionII/Image 2 (2).svg" ],
   tipoDeAccesorio : "anillo",
   descripcion :"Anillo infinito de ensueño",
   stock :[
   {
       talla: "50",
       cantidad: 20,
       color: "white",
   },
   {
       talla: "48",
       cantidad: 10,
       color: "black",
   }
]
},

{
    id : 4,
    nombre: "Opulent Jewels Ring",
    codigo: 400,
    precioUnitario: 168.76,
    talla: "60",
    imagenes: ["/assets/Image_PageII/Images_sectionII/Image 2 (4).svg" ],
   tipoDeAccesorio : "anillo",
   descripcion :"Anillo de joyas opulentas",
   stock :[
   {
       talla: "60",
       cantidad: 9,
       color: "black",
   },
   {
       talla: "50",
       cantidad: 10,
       color: "black",
   }
]
},

{
    id : 5,
    nombre: "Serene Solitaire Earrings",
    codigo: 500,
    precioUnitario: 125.78,
    imagenes: ["/assets/Image_PageII/Images_sectionII/Image 2 (5).svg" ],
   tipoDeAccesorio : "arete",
   talla: 3,
   descripcion :"Pendientes Solitario Sereno",
   stock :[
   {
       talla: 3,
       cantidad: 9,
       color: "black",
   },
   {
       talla: 4,
       cantidad: 10,
       color: "black",
   }
]
},

{
    id : 6,
    nombre: "Timeless Halo Earrings",
    codigo: 600,
    precioUnitario: 620.73,
    talla: 5,
    imagenes: ["/assets/Image_PageII/Images_sectionII/Image 2 (6).svg"  ],
   tipoDeAccesorio : "arete",
   descripcion :"Pendientes de halo temporales",
   stock :[
   {
       talla: 5,
       cantidad: 9,
       color: "white",
   },
   {
       talla: 6,
       cantidad: 10,
       color: "black",
   }
]
},

{
    id : 7,
    nombre: "Exquisite Earrings",
    codigo: 700,
    precioUnitario: 327.71,
    talla: 4,
    imagenes: ["/assets/Image_PageII/Images_sectionII/Image 2 (7).svg"  ],
   tipoDeAccesorio : "arete",
   descripcion :"Pendientes exquisitos",
   stock :[
   {
       talla: 4,
       cantidad: 9,
       color: "black",
   },
   {
       talla: 5,
       cantidad: 10,
       color: "black",
   }
]
},
{
    id : 8,
    nombre: "Timeless Elegance Ring",
    codigo: 800,
    precioUnitario: 168.76,
    talla: 48,
    imagenes: ["/assets/Image_PageII/Images_sectionII/Image 2 (9).svg" ],
   tipoDeAccesorio : "anillo",
   descripcion :"Anillo de elegancia atemporal",
   stock :[
   {
       talla: 48,
       cantidad: 9,
       color: "black",
   },
   {
       talla: 55,
       cantidad: 10,
       color: "black",
   }
]
},
]


const filterproduct = ( listaProduct, tipoDeAccesorio) => {
 const listaFiltradaProduct = listaProduct.filter(item =>item.tipoDeAccesorio === tipoDeAccesorio );
  

console.log(listaFiltradaProduct);
    console.log(listaProduct);
    return filterproduct ;
}
filterproduct(listaProduct,"anillo");

const searchProduct = (listaProduct,nombre) =>{
    const searchResult = listaProduct.filter(listaProduct => listaProduct.nombre.toLowerCase());

    console.log("el resultado de la busqueda es:", searchResult);
    console.log(listaProduct);
    return searchProduct;
}
 
searchProduct(listaProduct, "LuxuryGemsNecklace");


const ordenarPorPrecioAscendente = (listaProduct) => {
    const ascendente = listaProduct.slice().sort((a ,b) => a.precioUnitario - b.precioUnitario );
      console.log(" lalista ordenada de forma desendente por precio unitario es; ",ascendente)
      return ordenarPorPrecioAscendente;
}
ordenarPorPrecioAscendente(listaProduct,125.78);

const ordenarPorPrecioDecendente = (listaProduct) => {
    const decendente = listaProduct.slice().sort((a ,b) => b.precioUnitario - a.precioUnitario );
      console.log(" lalista ordenada de forma desendente por precio unitario es; ",decendente)
      return ordenarPorPrecioDecendente;
}
ordenarPorPrecioDecendente(listaProduct, 125.78);

const calcularTotalCompra = (listaProduct) => {
    const totalCompas = listaProduct.reduce(
        (listaProduct, item) =>listaProduct (item.cantidad * item.precioUnitario),
         0);
    console.log("el total a pagar es: ", totalCompas);
    return calcularTotalCompra;
}
calcularTotalCompra(168.76, 9);

const containerCards = document.getElementById("container__Cards");