// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//DECLARACION DE VARIBALES:
let listaDeNombres=[]

function asignarNombres(){
    let nombres = document.getElementById('amigo').value.trim()
    if (nombres==''){
        alert('Por favor inserte un nombre')
    }else {
        
        agregarNombresLista(nombres)
    }
}

function agregarNombresLista(nombres){
    listaDeNombres.push(nombres)
    console.log(listaDeNombres)
    let agrearNombre = document.getElementById('listaAmigos')
        agrearNombre.innerHTML = listaDeNombres
}