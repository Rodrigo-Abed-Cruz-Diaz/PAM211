const personas = [
    {nombre: "Ana", edad: 22},
    {nombre: "Luis", edad: 35},
    {nombre: "Maria", edad: 28}
];

const encontrado = personas.find(persona => persona.nombre === "Luis");
console.log(encontrado);

personas.forEach(personas => {console.log(personas.nombre, personas.edad)});

const suma = personas.reduce((total, personas) => total + personas.edad, 0);
console.log(suma); 