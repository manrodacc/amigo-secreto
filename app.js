// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//DECLARACION DE VARIBALES:
let listaDeNombres=[]

function asignarNombres(){
    let nombres = document.getElementById('amigo').value.trim()
    if (nombres==''){
        alert('Por favor inserte un nombre')
    }else {
        listaDeNombres.push(nombres)
        agregarNombresLista();
    }
    
    limpiarCaja()
}

function agregarNombresLista(){
    let asignarNombres = document.getElementById('listaAmigos')
    asignarNombres.innerHTML = "";

    for (let i = 0 ; listaDeNombres.length>i;i++){
        let li = document.createElement("li")
        li.textContent = listaDeNombres[i]
        asignarNombres.appendChild(li);
    }
}

function limpiarCaja(){
    let cajaNombres = document.getElementById('amigo').value =''
}

function sortearAmigo (){
    if(listaDeNombres.length>1){
        let numeroRandom = Math.floor(Math.random()*listaDeNombres.length)
    console.log(numeroRandom)
    let amigoElegido = listaDeNombres[numeroRandom]
    resultado.textContent = amigoElegido;  
    }else{alert('Ingrese como minimo 2 nombres')}
    
}

