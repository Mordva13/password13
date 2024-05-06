const passwordLength = document.getElementById('password-length');
const includeNumbers = document.getElementById('include-numbers');
const includeSpeial = document.getElementById('include-special');
const includeUppercase = document.getElementById('include-uppercase');
const generateBtn = document.querySelector('.generate-btn');
const passwordBtnCopy = document.querySelector('.copy-btn');
const passwordOutput = document.getElementById('passwordOutput');
const passwordYour = document.getElementById('your-password');


const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numberChars = '0123456789'
const specialChars = '!@#$%^&*()_+-={}[]|?;:,.<>?`~"♡'

const generatePassword = () => {
    let password = ''
    let possibleChars = lowercaseChars

    if (includeNumbers.checked) {
        possibleChars += numberChars
    }
    if (includeSpeial.checked) {
        possibleChars += specialChars
    }
    if (includeUppercase.checked) {
        possibleChars += uppercaseChars
    }

    for (let i=0; i < passwordLength.value; i++) {
        let s = possibleChars[Math.floor(Math.random() * possibleChars.length)]
        password += s
    }
    passwordYour.textContent = password
}
passwordYour.textContent = ''
generateBtn.addEventListener('click', () => {
    generatePassword()
    passwordBtnCopy.textContent = 'СКОПИРОВАТЬ ПАРОЛЬ'
})

passwordBtnCopy.addEventListener('click', () => {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(passwordYour.textContent)
        passwordBtnCopy.textContent = 'ПАРОЛЬ СКОПИРОВАН!'
    }
})