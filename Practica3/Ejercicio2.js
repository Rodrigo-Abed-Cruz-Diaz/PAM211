const verificarUsuario = (usuario) => {
  return new Promise((resolve, reject) => {
    const accesoConcedido = (usuario === "admin");

    if (accesoConcedido) {
      resolve("Acceso concedido");
    } else {
      reject("Acceso denegado");
    }
  });
};

const usuarioIngresado = "Rodrigo"; 

verificarUsuario(usuarioIngresado)
  .then(mensaje => console.log(mensaje))
  .catch(error => console.error(error));