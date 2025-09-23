const productos = [
   {nombre: "Laptop", precio: 12000},
   {nombre: "Mouse", precio: 250},
   {nombre: "Teclado", precio: 700},
   {nombre: "Monitor", precio: 3000}
];

const productos_caros = productos.filter(producto => producto.precio > 1000);
const nombres_productos = productos_caros.map(producto => producto.nombre)

console.log(nombres_productos);