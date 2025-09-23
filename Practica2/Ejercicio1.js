const persona = {
    nombre : "Rodrigo Abed",
    edad : 19,
    direccion : {
        ciudad: "Guanajuato",
        pais : "México"
    }
};

const {nombre, edad, direccion: {ciudad, pais}} = persona;

document.write("Hola me llamo " + nombre + " . Tengo " + edad + " años y vivo en " + ciudad);