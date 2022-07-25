let spaceshipName = prompt("Digita o nome da Nave:")

let spaceshipVelocity = 0

let chosenOption

function showMenu() {
    let option 
    while (option != "1" && option != "2" && option != "3" && option !="4") {
        option = prompt("Escolha uma opção:\n" +
        "1 - Acelerar a nave em 5km/s\n" + 
        "2 - Desacelerar a nave em 5km/s\n" +
        "3 - Imprimir dados de bordo\n" +
        "4 - Sair do programa")
    }
    
    return option
}
/* criar função para o numero 1*/ 
function speedUp(velocity){
    let newVelocity = velocity + 5
    return newVelocity
}

/* criar função para o numero 2*/ 
function slowDown(velocity) {
    let newVelocity = velocity - 5
    if(newVelocity < 0) {
        newVelocity = 0
    }
    return newVelocity
}

/* criar função para o numero 3*/ 

function printSpaceshipBoardData(name, velocity){
    alert ("Espaçonave: " + name + "\nVelocidade: " + velocity + "km/s")
}

do {
    chosenOption = showMenu ()
    switch (chosenOption){
        case "1":
            spaceshipVelocity = speedUp(spaceshipVelocity)
        break
        case "2":
            spaceshipVelocity = slowDown(spaceshipVelocity)
        break
        case "3":
            printSpaceshipBoardData (spaceshipName, spaceshipVelocity)
        break
        default:
            alert("Encerrando programa de bordo")
    } 
} while(chosenOption != "4")

