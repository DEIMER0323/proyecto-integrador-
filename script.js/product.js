const listaProduct = [
    {
     id : 1,
     nombre: "LuxuryGemsNecklace",
     codigo: 100,
     precioUnitario: 168.76,
     imagenes: ["/assets/Image_PageII/Images_sectionII/Image 2 (8).svg" ],
    tipoDeAccesorio : ["collar"],
    descripcion :[{
        nombre: "LuxuryGemsNecklace",
        descripcion: "collar negro",
        precioUnitario: 168.76,
        color : "black",
        
    
    }],
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
   tipoDeAccesorio : ["collar blanco "],
   descripcion :[{
       nombre: "Reflections Necklace",
       precioUnitario: 620.76,
       color : "white",
       talla: "s"
       
   }],
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
   tipoDeAccesorio : ["anillo"],
   descripcion :[{
       nombre: "Dreamy Infinity Ring",
       precioUnitario: 327.71,
       color : "white",
       talla: "50"
       
   }],
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
   tipoDeAccesorio : ["anillo","brazalete","collar","arete"],
   descripcion :[{
       nombre: "Opulent Jewels Ring",
       precioUnitario: 168.76,
       color : "black",
       talla: "60"
       
   }],
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
   tipoDeAccesorio : ["arete"],
   talla: 3,
   descripcion :[{
       nombre: "Serene Solitaire Earrings",
       precioUnitario: 125.78,
       color : "white",
       talla: 3
       
       
   }],
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
   tipoDeAccesorio : ["arete"],
   descripcion :[{
       nombre: "Timeless Halo Earrings",
       precioUnitario: 620.73,
       color : "white",
       talla: 5
       
   }],
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
   tipoDeAccesorio : ["arete"],
   descripcion :[{
       nombre: "Exquisite Earrings",
       precioUnitario: 327.71,
       color : "black",
       talla: 4
       
   }],
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
   tipoDeAccesorio : ["anillo"],
   descripcion :[{
       nombre: "Timeless Elegance Ring",
       precioUnitario: 168.76,
       color : "black",
       talla: 48
       
   }],
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
}
filterproduct(listaProduct,"anillo");

const searchProduct = (listaProduct,nombre) =>{
    const searchResult = listaProduct.filter(listaProduct => listaProduct.nombre.toLowerCase());

    console.log("el resultado de la busqueda es:", searchResult);
    console.log(listaProduct);
}
 
searchProduct(listaProduct, "LuxuryGemsNecklace");


const ordenarPorPrecioAscendente = (listaProduct) => {
    const ascendente = listaProduct.slice().sort((a ,b) => a.precioUnitario - b.precioUnitario );
      console.log(" lalista ordenada de forma desendente por precio unitario es; ",ascendente)
}
ordenarPorPrecioAscendente(listaProduct,125.78);

const ordenarPorPrecioDecendente = (listaProduct) => {
    const decendente = listaProduct.slice().sort((a ,b) => b.precioUnitario - a.precioUnitario );
      console.log(" lalista ordenada de forma desendente por precio unitario es; ",decendente)
}
ordenarPorPrecioDecendente(listaProduct, 125.78);

const calcularTotalCompra = (listaProduct) => {
    const totalCompas = listaProduct.reduce(
        (listaProduct, item) =>listaProduct (item.cantidad * item.precioUnitario),
         0);
    console.log("el total a pagar es: ", totalCompas);
}
calcularTotalCompra(168.76, 9);

