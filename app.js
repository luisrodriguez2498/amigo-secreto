// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crear una lista de amigos
let amigos = [];

// Funcion que se ejecuta para limpiar la caja de texto
function limpiarCaja() {
    return document.querySelector('#amigo').value = '';
}

// Funcion que se ejecuta para agregar un amigo a la lista siempre y cuando no sea una cadena vacia
function agregarAmigo() {
  let amigoInput = document.querySelector('#amigo').value;
  if (amigoInput === '') {
    alert('Debes ingresar un nombre');
    return;
  } else {  
    amigos.push(amigoInput);
    limpiarCaja();
    console.log(amigos);
  }
} 

function actualizarListaAmigos() {
  let listaAmigos = document.querySelector('#listaAmigos');
  listaAmigos.innerHTML = '';
  amigos.forEach((amigo) => {
    listaAmigos.innerHTML += `<li>${amigo}</li>`;
  });
}
