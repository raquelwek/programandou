
  function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
      }
        let jugador = 0
        let pc = 0
        let triunfos = 0
        let perdidas = 0
        

      function eleccion(jugada) {
        let resultado = ""
        if(jugada == 1) {
          resultado = "Piedra 🪨"
        } else if (jugada == 2) {
          resultado = "Papel 📃"
        } else if (jugada == 3) {
          resultado = "Tijera ✂️"
        } else {
          resultado = "MAL ELEGIDO"
        }
        return resultado
    }

            while(triunfos < 3 && perdidas < 3){   parcial = combate()
                pc = aleatorio(1,3)
                jugador = prompt("Elige: 1 para piedra, 2 para papel, 3 para tijera") 
            alert("PC elige: " + eleccion(pc))
            alert("Tu eliges: " + eleccion(jugador))
            parcial = combate()
            
        
            //COMBATE
            function combate(){
                if (jugador == pc) {
                    punto = "empate"
                }
                else if(jugador == 1 && pc == 3 || jugador == 2 && pc == 1 ||  jugador == 3 && pc == 2){
                    triunfos = triunfos + 1
                    punto = "GANASTE" 
                }else {
                    perdidas = perdidas +1
                    punto = "PERDISTE"
                }
               return punto
               alert(punto)
            }
        }
alert("Ganaste " + triunfos + " veces. Perdiste " + perdidas + " veces.")
        