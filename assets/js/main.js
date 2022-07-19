let calcAge

const yob = document.getElementById('birthyear')
const today = new Date().getFullYear()
const age = document.getElementById('age')


function calculate() {
    calcAge = Number(today - yob.value)
    age.innerHTML = calcAge
}