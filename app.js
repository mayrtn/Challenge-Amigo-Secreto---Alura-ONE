

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
           if (listaAmigos.includes(amigo.value)) {
            alert("Ya incluiste ese amigo en tu lista!")
            limpiarCampo()
           } else {
                listaAmigos.push(amigo.value)
                listaAmigosDisponibles.push(amigo.value)
                console.log(`lista de amigos: ${listaAmigos}`)
                actualizarLista();
                limpiarCampo();
           }
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
            break 
        }
    }
    
    let liItems = document.querySelectorAll("ul li"); // Obtener todos los <li> de la lista
    for ( item of liItems) {
        for (let item of liItems) {
            if (item.textContent.trim() === amigoGanador.trim()) { //.trim() elimina los espacios en blanco al principio y al final del texto,
                item.classList.add("tachado");
                break;
            } 
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