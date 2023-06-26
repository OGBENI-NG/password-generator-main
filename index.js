const characters = ["A","B","C","D","E","F","G","H","I","J","K",
"L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a",
"b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q",
"r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5",
"6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
"_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const passwordElOne = document.getElementById("password-field1")
const passwordElTwo = document.getElementById("password-field2")
const tooltipTxt = document.getElementById("tooltip-txt")
const tooltipTxt2 = document.getElementById("tooltip-txt2")
const passwordLengthEl = document.getElementById("password-length")
const passwordTxtEl = document.querySelector(".password-txt")
const minusEl = document.getElementById("minus")
const plusEl = document.getElementById("plus")
let passwordLength = 12
let randomPassword1 = ""
let randomPassword2 = ""
let disabled = false


passwordLengthEl.textContent = passwordLength
plusEl.addEventListener('click', (e) => {
    e.preventDefault()
    passwordLength++
    passwordLengthEl.textContent = passwordLength
    update()
})

minusEl.addEventListener('click', (e) => {
    e.preventDefault()
    passwordLength--
    passwordLengthEl.textContent = passwordLength
    update()
})

function update() {
    if (passwordLength <= 5) {
        minusEl.disabled = true
        plusEl.disabled = false
    } else if (passwordLength < 7 || passwordLength < 8) {
        passwordTxtEl.textContent = "Weak"
        passwordTxtEl.className = "weak-password"
        plusEl.disabled = false
    } else if (passwordLength > 7 && passwordLength <= 11) {
        passwordTxtEl.textContent = "Good"
        passwordTxtEl.className = "good-password"
        plusEl.disabled = false
    } else if (passwordLength >= 11 && passwordLength <= 13) {
        passwordTxtEl.textContent = "Strong"
        passwordTxtEl.className = "strong-password"
        plusEl.disabled = false
    } else if(passwordLength >= 15) {
        plusEl.disabled = true
    } else {
        minusEl.disabled = false
        plusEl.disabled = false
    }
}

function updateCopyPw() {
    if (passwordLength <= 7 || passwordLength < 8) {
        passwordElOne.className = "weak-password"
        passwordElTwo.className = "weak-password"
       
    } else if (passwordLength > 7 && passwordLength <= 11) {
        passwordElOne.className = "good-password"
        passwordElTwo.className = "good-password"
        
    } else if (passwordLength >= 11 && passwordLength <= 15) {
        passwordElOne.className = "strong-password"
        passwordElTwo.className = "strong-password"
        
    } else {
        passwordElOne.className = "password-field"
        passwordElTwo.className = "password-field"
    } 
        
}

// getting random password function
function getRandomCharacter() {
    let passwordChar1 = Math.floor( Math.random() * characters.length)
    return characters[passwordChar1]
}

// generation random password function
function generateRandomPassword() {
    tooltipTxt.style.display = "block"
    tooltipTxt2.style.display = "block"

    randomPassword1 = ""
    randomPassword2 = ""
    
    tooltipTxt2.textContent = 'Copy-Text'
    tooltipTxt.textContent = 'Copy-Text'
    
    for (let i = 0; i < passwordLength; i++) {
        randomPassword1 += getRandomCharacter()
        randomPassword2 += getRandomCharacter()
    }
    updateCopyPw()
    passwordElOne.textContent = randomPassword1
    passwordElTwo.textContent = randomPassword2
}

passwordElOne.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordElOne.textContent)
    tooltipTxt.textContent = "Copied"
    passwordElOne.textContent = 'Copied'
    setTimeout(() => {
        passwordElOne.textContent = randomPassword1
        tooltipTxt.style.display = "none"
    }, 1000)

})

passwordElTwo.addEventListener('click', () => {
    navigator.clipboard.writeText(passwordElTwo.textContent)
    tooltipTxt2.textContent = "Copied"
    passwordElTwo.textContent = 'Copied'
    setTimeout(() => {
        passwordElTwo.textContent = randomPassword2
        tooltipTxt2.style.display = "none"
    }, 1000)

})











