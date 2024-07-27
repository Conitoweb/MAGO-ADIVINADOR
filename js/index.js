const PREGUNTA = document.querySelector("#pregunta").value.trim()
const RESPUESTA = document.querySelector("#respuesta")
const BOTON_PREGUNTAR = document.querySelector(".btn_pregunta").addEventListener("click" , responderPregunta)

const respuestasAleatorias = [
    "si",
    "no",
    "Talvez si",
    "Talvez no",
    "posiblemente si",
    "posiblemente no",
    "podria ser"
]
let numeroAleatorio = Math.floor(Math.random() * respuestasAleatorias.length)

function responderPregunta(){
   
    if(PREGUNTA.length <= 0) {
        console.log("ingrese dato");
    }else{
        preguntaRespondida()
    }
 }

 function preguntaRespondida(){
      console.log("posiblemente si");
 }