import { sum } from './sum.rs'

const form = document.querySelector('.formas')
const a = document.querySelector('.a')
const b = document.querySelector('.b')
const res = document.querySelector('.result')

form.addEventListener('submit', event => {
    event.preventDefault()
    console.log(sum(a.value, b.value))
    res.innerHTML = sum(a.value, b.value)
})
