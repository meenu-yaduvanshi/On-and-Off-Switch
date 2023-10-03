
var buttonOff = document.querySelector("#button_off")
let com = 0
buttonOff.addEventListener("click", function () {

    if (com === 0) {
        buttonOff.textContent = "TURN ON"
        com = 1
        buttonOff.style.backgroundColor = "green"
    }
    else {
        buttonOff.textContent = "TURN OFF"
        com = 0
        buttonOff.style.backgroundColor = "white"
    }
})
















// var imgOff = document.querySelector("#img_off")
// var imgOn = document.querySelector("#img_on")

