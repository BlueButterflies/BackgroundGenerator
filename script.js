var cssTxt =  document.querySelector('h3');
var firstColor =  document.querySelector('#firstColor');
var secondColor =  document.querySelector('#secondColor');
var body =  document.getElementById('gradient');

function setGradient(){
    body.style.background = 
    'linear-gradient(to right, '+
    firstColor.value + ', '+
    secondColor.value + ')';

    cssTxt.textContent = body.style.background + ';';
}

firstColor.addEventListener('input', setGradient)

secondColor.addEventListener('input', setGradient)