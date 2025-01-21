// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let listaAmigosSorteados = [];
let listaAmigosDisponibles = [];
let amigoGanador = "";
let liLista=document.getElementById("listaAmigos");
console.log(`lista de amigos: ${listaAmigos}`)

function agregarAmigo(){

    if (document.getElementById("amigo").value == ""){
        alert("Debes escribir el nombre de un amigo para agregarlo al sorteo");
        return 
    } else { 
        let amigo = document.getElementById("amigo")
        listaAmigos.push(amigo.value)
        listaAmigosDisponibles.push(amigo.value)
        console.log(`lista de amigos: ${listaAmigos}`)
        actualizarLista();
        limpiarCampo();
    }
}

function limpiarCampo(){
    document.getElementById("amigo").value="";
}

function sortearAmigo(){
    
    if (listaAmigosDisponibles.length === 0) { /* desabilita el boton sortear cuando no hay mas amigos disponibles*/
        alert("Todos los amigos han sido sorteados. ¡El juego ha terminado!");
        return
    }

    let indice = Math.floor(Math.random() * listaAmigosDisponibles.length);
    amigoGanador = listaAmigosDisponibles[indice];
    console.log(amigoGanador);

    listaAmigosSorteados.push(amigoGanador); //agregamos el amigo ganador a la lista de amigos ya sorteados


    for (let i = 0; i < listaAmigosDisponibles.length; i++) {
        if (listaAmigosDisponibles[i] === amigoGanador) {
            listaAmigosDisponibles.splice(i, 1); // si el amigo ya salio sorteado lo elimina de la lista de amigos disponibles
            break // si no se incluye el break, si hay dos amigos con el mismo nombre los tacha a ambos
        }
    }
    
    let liItems = document.querySelectorAll("ul li"); // Obtener todos los <li> de la lista
    for (let item of liItems) {
        if (item.textContent === amigoGanador) {
            item.classList.add("tachado"); 
            break; // si no se incluye el break, si mas de 1 amigo con el mismo nombre los tacha a ambos
    }

    document.getElementById("resultado").innerHTML=amigoGanador;
    }
}

function actualizarLista(){
    liLista.innerHTML=""; //limpia la lista  

    for (let i=0; i<listaAmigos.length;i++){
        let li = document.createElement("li");
        li.textContent = listaAmigos[i];
        liLista.appendChild(li)
    }
}

function reiniciarSorteo(){
    listaAmigos = []; //reinicia la lista de amigos
    liLista.innerHTML=""; //limpia la lista 
    amigoGanador = ""; //borra el amigo ganador
    document.getElementById("resultado").innerHTML=""; //borra el resultado
    listaAmigosDisponibles=[]; 
    }


