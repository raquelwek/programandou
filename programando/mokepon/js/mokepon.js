let playerAtack 
let enemyAtack


function iniciarJuego(){
    let petBoton = document.getElementById("boton-pet")
    petBoton.addEventListener("click", petSelection)

    let fireBoton = document.getElementById("boton-fire")
    fireBoton.addEventListener("click", fireAtack)

    let waterBoton =  document.getElementById("boton-water")
    waterBoton.addEventListener("click", waterAtack)

    let earthBoton =  document.getElementById("boton-earth")
    earthBoton.addEventListener("click", earthAtack)
}

function petSelection(){
    let inputHipodige = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let spanPetPlayer = document.getElementById("pet-player")

    if (inputHipodige.checked){
        spanPetPlayer.innerHTML = "Hipodoge"
        
    } else if(inputCapipepo.checked){
        spanPetPlayer.innerHTML = "Capipepo"

    }else if(inputRatigueya.checked){
        spanPetPlayer.innerHTML = "Ratigueya"

    }else{
        alert("YOU HAVE TO SELECT A PET, ASSHOLE")
    }

    enemyPetSelection()
}

function enemyPetSelection(){
    let randomPet = random(1, 3)
    let spanPetEnemy = document.getElementById("pet-enemy")

    if(randomPet == 1) {
        spanPetEnemy.innerHTML = "Hipodoge"

    } else if(randomPet == 2) {
        spanPetEnemy.innerHTML = "Capipepo"

    } else (randomPet == 3);
        spanPetEnemy = "Ratigueya"
    

}

function fireAtack(){
    playerAtack = "FIRE"
    enemyRandomAtack()
}
function waterAtack(){
    playerAtack = "WATER"
    enemyRandomAtack()
}
function earthAtack(){
    playerAtack = "EARTH"
    enemyRandomAtack()
}
function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
function enemyRandomAtack(){
     let randomAtack = random(1, 3)

     if (randomAtack == 1){
        enemyAtack  = "FIRE"
     } else if (randomAtack == 2){
        enemyAtack  = "WATER"
     } else {
        enemyAtack = "EARTH"
     }
     createMessage()
}
function createMessage(){
     let 
}
window.addEventListener("load", iniciarJuego)