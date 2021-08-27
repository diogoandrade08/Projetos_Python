const versoUm = document.querySelector('#verso-um');
const versoDois = document.querySelector('#verso-dois');
const versoTres = document.querySelector('#verso-tres');
const versoQuatro = document.querySelector('#verso-quatro');
const versoCinco = document.querySelector('#verso-cinco');
const versoSeis = document.querySelector('#verso-seis');
const audio = document.querySelector('audio');
const buttonPlay = document.querySelector('#play');
const buttonStop = document.querySelector('#stop');
const simbolo1 = document.querySelector('#simbolo1');
const simbolo2 = document.querySelector('#simbolo2');
const simbolo3 = document.querySelector('#simbolo3');
const simbolo4 = document.querySelector('#simbolo4');

let hora = 0;
let minutos = 0;
let segundos = 0;

let tempo = 1000;
let cron;

function playmusica() {
    audio.currentTime = 0.2;
    audio.play();
    buttonPlay.style.background = 'darkgoldenrod';
    buttonPlay.style.color = 'black';
    buttonStop.style.background = 'black';
    buttonStop.style.color = 'white';
    simbolo1.style.display = 'block';

    cron = setInterval(() => { time(); }, tempo);

}

buttonPlay.addEventListener('click', playmusica);


buttonStop.addEventListener('click', function () {
    audio.pause();
    audio.currentTime = 0;
    hora = 0;
    minutos = 0;
    segundos = 0;
    clearInterval(cron);
    buttonPlay.style.background = 'black';
    buttonPlay.style.color = 'white';
    buttonStop.style.background = 'red';
    buttonStop.style.color = 'black';
    versoUm.style.display = 'none';
    versoDois.style.display = 'none';
    versoTres.style.display = 'none';
    versoQuatro.style.display = 'none';
    versoCinco.style.display = 'none';
    versoSeis.style.display = 'none';
    simbolo1.style.display = 'none';
    simbolo2.style.display = 'none';
    simbolo3.style.display = 'none';
    simbolo4.style.display = 'none';
})

function time() {

    segundos++;
    if(segundos == 60){
        segundos = 0;
        minutos++;
    }
    
    if (segundos == 10) {
        versoUm.style.display = 'block';
    } if(segundos == 51){
        versoDois.style.display = 'block';
    }if(minutos == 1 && segundos == 22){
        simbolo2.style.display = 'block';
    }if(minutos == 1 && segundos == 35){
        versoTres.style.display = 'block';
    }if(minutos == 2 && segundos == 01){
        simbolo3.style.display = 'block';
    }if(minutos == 2 && segundos == 25){
        versoQuatro.style.display = 'block';
    }if(minutos == 3 && segundos == 05){
        versoCinco.style.display = 'block';
    }if(minutos == 3 && segundos == 38){
        simbolo4.style.display = 'block';
    }if(minutos == 3 && segundos == 50){
        versoSeis.style.display = 'block';
    }
}