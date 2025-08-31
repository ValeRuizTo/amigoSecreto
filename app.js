let nombres= [];

function agregarAmigo() {
    let nombre= document.getElementById("amigo").value;
    if (nombre.trim() === "") {
          alert("Por favor, ingresa un nombre válido.");
            return;
        }
        nombres.push(nombre);
        mostrarAmigos();
        document.getElementById("amigo").value = "";

    }

    function mostrarAmigos() {
        let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";
        nombres.forEach(function(nombre) {  
            let li = document.createElement("li");
            li.textContent = nombre;
            lista.appendChild(li);
        });
    }

function sortearAmigo(){
    let indiceAleatorio = Math.floor(Math.random() * nombres.length);
    let amigoSorteado = nombres[indiceAleatorio];
    let lista = document.getElementById("listaAmigos");
        lista.innerHTML = "";

    let resultado = document.getElementById("resultado");
    resultado.innerHTML = "El amigo secreto es: " + amigoSorteado;
}

