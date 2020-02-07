let tela = document.getElementById('tela');
let d0 = document.getElementById('d0');
let d1 = document.getElementById('d1');
let d2 = document.getElementById('d2');
let d3 = document.getElementById('d3');
let d4 = document.getElementById('d4');
let d5 = document.getElementById('d5');
let d6 = document.getElementById('d6');
let d7 = document.getElementById('d7');
let d8 = document.getElementById('d8');
let d9 = document.getElementById('d9');
let dPonto = document.getElementById('dPonto');
let dMais = document.getElementById('mais');
let dMenos = document.getElementById('menos');
let dMult = document.getElementById('mult');
let dDiv = document.getElementById('dividir');
let limpar = document.getElementById('limpar');
let resultado = document.getElementById('igual');



const digitandoTecla = (event) => {
    let valor = event.target.innerText;
    tela.insertAdjacentHTML('beforeend',valor)
};

const digitandoTeclaPonto = (event) => {
    let valor = event.target.innerText;
    tela.insertAdjacentHTML('beforeend',".")
};

const limparTela = (event) => {
    tela.innerHTML = "";
}

const results = (event) => {
    tela = document.getElementById('tela');
    console.log(tela.value);
    let resul = eval(tela.value);
    tela.innerHTML = resul;
}

d0.addEventListener('click', digitandoTecla);
d1.addEventListener('click', digitandoTecla);
d2.addEventListener('click', digitandoTecla);
d3.addEventListener('click', digitandoTecla);
d4.addEventListener('click', digitandoTecla);
d5.addEventListener('click', digitandoTecla);
d6.addEventListener('click', digitandoTecla);
d7.addEventListener('click', digitandoTecla);
d8.addEventListener('click', digitandoTecla);
d9.addEventListener('click', digitandoTecla);

dPonto.addEventListener('click', digitandoTeclaPonto);
dMais.addEventListener('click', digitandoTecla);
dMenos.addEventListener('click', digitandoTecla);
dMult.addEventListener('click', digitandoTecla);
dDiv.addEventListener('click', digitandoTecla);
limpar.addEventListener('click', limparTela);
resultado.addEventListener('click', results);