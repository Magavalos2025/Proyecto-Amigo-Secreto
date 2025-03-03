let amigos= [];
let listaAmigos = [];
let amigosLista = [];

// funcion para agregar amigos//

function agregarAmigo(){
    let input = document.getElementById ('amigo');
    if (!input) {
        console.error('Elemento "amigos" no encontrado');
        return;
    }

    let nombreAmigo = input.value.trim() ;

    if (nombreAmigo === '') {
     alert ('Por favor, ingrese un nombre');
     return;
    }

    if (amigos.includes(nombreAmigo)) {
     alert ('Ese nombre ya está en la lista. Agregue un segundo nombre o apellido');
     return;
    }
    
    listaAmigos.push(nombreAmigo);

    actualizarLista ();
    console.log(listaAmigos);
    limpiarCaja();
    return;
}

//funcion para limpiar el cuadro de input//
function limpiarCaja() {
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = "";
}

//funcion para actualizar la lista//
function actualizarLista() {
    console.log ('Actualizando lista...');
    let listaAmigosElement = document.getElementById ('listaAmigos');
    listaAmigosElement.innerHTML = '';
    for (let i = 0; i <listaAmigos.length; i++){
        let nuevoNombre = document.createElement ('li');
        nuevoNombre.textContent = listaAmigos [i];
        listaAmigosElement.appendChild (nuevoNombre);
    }
    console.log ('Lista actualizada:', listaAmigos);
}

//funcion para sortear amigos// 
    
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert ("No se registran nombres para sortear");
    }
    let indiceAleatorio = Math.floor(Math.random()*listaAmigos.length); 
    let nombreAleatorio = listaAmigos[indiceAleatorio]; 
    let nombreElegido = document.getElementById('resultado');
    nombreElegido.innerHTML = `El nombre seleccionado es: "${nombreAleatorio}" 🎉`; 
    document.getElementById('reset').removeAttribute('disabled');
    document.getElementById('amigo').setAttribute('disabled', 'true');
    document.getElementById('intentos').setAttribute('disabled', 'true');
    document.querySelector('#ingresoDeNombre').setAttribute('disabled', 'true');
}

//Funcion para reiniciar juego//

function reiniciarJuego() {
 listaAmigos = []
 actualizarLista(); 
 limpiarCaja();

 document.getElementById('resultado').innerHTML = ''; //limpia el resultado
 document.getElementById('amigo').removeAttribute('disabled');
 document.querySelector('#ingresoDeNombre').removeAttribute('disabled');
 document.getElementById('intentos').removeAttribute('disabled');
 document.getElementById('reset').setAttribute('disabled','true');
}

