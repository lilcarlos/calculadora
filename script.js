let zerar = document.getElementById('ce')
let tela = document.getElementById('tela')
let num0 = document.getElementById('zero')
let num1 = document.getElementById('um')
let num2 = document.getElementById('dois')
let num3 = document.getElementById('tres')
let num4 = document.getElementById('quatro')
let num5 = document.getElementById('cinco')
let num6 = document.getElementById('seis')
let num7 = document.getElementById('sete')
let num8 = document.getElementById('oito')
let num9 = document.getElementById('nove')
let mais = document.getElementById('mais')
let menos = document.getElementById('menos')
let igual = document.getElementById('igual')
let mult = document.getElementById('mult')
let divid = document.getElementById('barra')
let ponto = document.getElementById('ponto')



const clicar = (event) => {
    let numero = (event.target.innerText)
    tela.insertAdjacentHTML('beforeend', numero)
}

const apagar = (event) => {
    tela.innerHTML = ''
}

const resultado = (event) => {

    let resultado = (eval(tela.innerText))
    tela.innerHTML = resultado
}

num1.addEventListener('click', clicar)
num2.addEventListener('click', clicar)
num3.addEventListener('click', clicar)
num4.addEventListener('click', clicar)
num5.addEventListener('click', clicar)
num6.addEventListener('click', clicar)
num7.addEventListener('click', clicar)
num8.addEventListener('click', clicar)
num9.addEventListener('click', clicar)
num0.addEventListener('click', clicar)
mais.addEventListener('click', clicar)
menos.addEventListener('click', clicar)
zerar.addEventListener('click', apagar)
igual.addEventListener('click', resultado)
mult.addEventListener('click', clicar)
divid.addEventListener('click', clicar)
ponto.addEventListener('click', clicar)
