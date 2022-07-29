function iniciarJuego(){
    let petBoton = document.getElementById("boton-pet")
    petBoton.addEventListener("click", petSelection)
}



function petSelection(){
    let inputHipodige = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")

    if (inputHipodige.checked){
        alert("you choose hipodoge ")
    } else if(inputCapipepo.checked){
        alert("you choose capipepo")
    }else if(inputRatigueya.checked){
        alert("You choose ratigueya")
    }else{
        alert("YOU HAVE TO SELECT A PET, ASSHOLE")
    }
}



window.addEventListener("load", iniciarJuego)