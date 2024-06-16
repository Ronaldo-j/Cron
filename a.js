let resultado = document.querySelector('.timer');

function zeroAEsquerda(num){
    if(num < 10){
        return `0${num}`
    }
    if(num >= 10){
        return num
    }
}

let hora = 0
let min = 0
let seg = 0
function contador(){
    seg++
    if(seg == 60){
        seg = 0
        min++
    }
    if(min == 60){
        min = 0
        hora++
    }
    return `${zeroAEsquerda(hora)}:${zeroAEsquerda(min)}:${zeroAEsquerda(seg)}`
}


let timer;
function start(){
    resultado.style.color = 'rgb(0, 0, 0)'

    clearInterval(timer); 
    
    timer = setInterval(function (){
        resultado.innerHTML = contador();
    }, 1000);
}

function paro(){
    resultado.style.color = 'rgb(255, 0, 0)'
    setTimeout(function(){
        clearInterval(timer);
    }, 0)
}

function reset(){
    resultado.style.color = 'rgb(0, 0, 0)'
    setTimeout(function(){
        clearInterval(timer);
    }, 0)

    resultado.innerHTML = '00:00:00'

    hora = 0
    min = 0
    seg = 0
}
