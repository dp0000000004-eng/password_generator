const inputEl = document.getElementById("inputEl")
const displayEl = document.getElementById("displayEl")
const btnEl = document.getElementById("enterSizeBtn")
const errorEl = document.getElementById("errorMsg")
const sizeValue = document.getElementById("sizeValue")
const copyBtn = document.getElementById("copyBtn")

const upperCase = "abcdefghijklmnopqrstuvwxyz56789"
const lowerCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ01234"
const symbols = "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
const numbers = "1234567890"

function passGenrator(size) {
    let password = ""
    const div = Math.floor(size / 3)
    const left = Math.floor(size % 3)

    for (let i = 0; i < div; i++) {
        password += upperCase[Math.floor(Math.random() * upperCase.length)]
        password += symbols[Math.floor(Math.random() * symbols.length)]
        password += lowerCase[Math.floor(Math.random() * lowerCase.length)]
    }

    for (let i = 0; i < left; i++) {
        password += numbers[Math.floor(Math.random() * numbers.length)]
    }

    return password
}

function showError(message) {
    errorEl.hidden = false
    errorEl.textContent = message
}

function clearError() {
    errorEl.hidden = true
    errorEl.textContent = ""
}

function passChecker() {
    const size = parseInt(inputEl.value, 10)

    if (!size || size < 8) {
        showError("choose a length of 8 or more")
        displayEl.classList.add("is-empty")
        displayEl.textContent = "your tide is still"
        copyBtn.disabled = true
        return
    }

    clearError()
    const password = passGenrator(size)
    displayEl.classList.remove("is-empty")
    displayEl.textContent = password
    copyBtn.disabled = false
    copyBtn.textContent = "copy"
}

document.addEventListener("DOMContentLoaded", () => {
    displayEl.classList.add("is-empty")
    sizeValue.textContent = inputEl.value

    inputEl.addEventListener("input", () => {
        sizeValue.textContent = inputEl.value
        clearError()
    })

    btnEl.addEventListener("click", () => {
        passChecker()
    })

    copyBtn.addEventListener("click", async () => {
        const value = displayEl.textContent
        if (!value || displayEl.classList.contains("is-empty")) return

        try {
            await navigator.clipboard.writeText(value)
            copyBtn.textContent = "copied"
            setTimeout(() => {
                copyBtn.textContent = "copy"
            }, 1200)
        } catch {
            showError("could not copy")
        }
    })
})
