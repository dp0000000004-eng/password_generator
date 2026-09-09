const inputEl = document.getElementById("inputEl")
const displayEl = document.getElementById("displayEl")
const btnEl = document.getElementById("enterSizeBtn")
const errorEl = document.getElementById("errorMsg")
let size = 0
const upperCase = "abcdefghijklmnopqrstuvwxyz56789"
const lowerCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ01234"
const symbols = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
let password = ""


function passGenrator(size) {
    const div = Math.floor(size / 3)
    const left = Math.floor(size % 3)

    
    
    for (let i = 0; i < div; i ++) {
        password += upperCase[Math.floor(Math.random() * length.upperCase)]
    }
    console.log(password)

}

function passChecker() {

    size = parseInt(inputEl.value)
    if (size) {
        console.log(size)
    } else {
        errorEl.textContent = "Plz enter a number"
    }
    inputEl.value = ""
    passGenrator(size)

}

document.addEventListener("DOMContentLoaded", () => {
    btnEl.addEventListener("click", () => {
        passChecker()
    })
})