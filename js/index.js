const  PREGUNTA = document.getElementById("ValorPregunta")
const RESPUESTA = document.getElementById("respuesta")
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

function responderPregunta(){
    let valor = PREGUNTA.value
    if (valor.trim() != '') {
        preguntaRespondida()
        RESPUESTA.innerHTML= "viendo el futuro..."
        
    }else{
        alert("debes ingresar una pregunta")
    }
    
    
}


function preguntaRespondida(){
    let numeroAleatorio = Math.floor(Math.random() * respuestasAleatorias.length)
    
    setTimeout( () => {
        RESPUESTA.innerHTML = respuestasAleatorias[numeroAleatorio]

        PREGUNTA.value = ""
        PREGUNTA.focus()
      
    }, 1500)
     
   

    
 }