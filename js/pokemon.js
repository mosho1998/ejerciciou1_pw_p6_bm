
let puntaje = 0;
let intentos = 1;

function opcion(valor) {

    document.getElementById("intentos").innerText = "Intentos: " + intentos;

    if (valor === "excadrill") {
        let puntos = 0;
        if (intentos === 1) {
            puntos = 5;
        } else if (intentos === 2) {
            puntos = 3;
        } else if (intentos === 3) {
            puntos = 1;
        } else if (intentos === 4) {
            reiniciar();
        }


        puntaje += puntos;
        intentos++;
        document.getElementById("puntaje").innerText = "Puntaje: " + puntaje;

        document.getElementById("idRespuestaCorrecta").innerText = "Felicitaciones, has seleccionado la opcion correcta";
        document.getElementById("idRespuestaIncorrecta").innerText = "";
        document.getElementById("idImgInicial").src = "../img/pcolor.jpg";

    } else {
        intentos++;
        document.getElementById("idRespuestaIncorrecta").innerText = "Pokemon incorrecto, intentalo nuevamente";
        document.getElementById("idRespuestaCorrecta").innerText = "";
        document.getElementById("idImgInicial").src = "../img/pnegro.jpg";
     

    }
}


function reiniciar() {
    puntaje = 0;
    intentos = 0;
    document.getElementById("intentos").innerText = "Intentos: " + intentos;
    intentos++;
    document.getElementById("puntaje").innerText = "Puntaje: " + puntaje;
    document.getElementById("idRespuestaIncorrecta").innerText = "";
    document.getElementById("idRespuestaCorrecta").innerText = "";
    document.getElementById("idImgInicial").src = "../img/pnegro.jpg";

}