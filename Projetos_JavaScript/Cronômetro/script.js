const buttonStart = document.querySelector('#button-one');
const buttonStop = document.querySelector('#button-two');
const buttonRestart = document.querySelector('#button-three');

let hora =  0;
let minutos = 0;
let segundos  = 0;

let tempo = 1000;
let cron;

function start(){
    
    cron = setInterval(() => { time(); }, tempo);


}
function Stop(){
    clearInterval(cron);
}
function restart(){
    clearInterval(cron);
    hora =  0;
    minutos = 0;
    segundos  = 0;  

    document.getElementById('contagem').innerText = '00 : 00 : 00';
}
function time(){
    
    segundos++;

    if(segundos == 60){
        segundos = 0;
        minutos++;

        if(minutos == 60){
        minutos = 0;
        hora++;
        }
    }

    let format = (hora < 10 ? '0' + hora : hora) + ' : ' + (minutos < 10 ? '0' + minutos : minutos) + ' : ' + 
    (segundos < 10 ? '0' + segundos : segundos);


    document.getElementById('contagem').innerText = format;

}


buttonStart.addEventListener('click', start);
buttonStop.addEventListener('click', Stop);
buttonRestart.addEventListener('click', restart);
