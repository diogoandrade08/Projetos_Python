const idade = document.querySelector("#idade");
const altura = document.querySelector("#altura");
const peso = document.querySelector("#peso");
const enviar = document.querySelector("#enviar");


function imc(){
    const resultado = (peso.value / (altura.value * altura.value)).toFixed(1);
    const menssagem = document.querySelectorAll('.menssagem');
    const maisPeso = document.querySelector('#maisPeso');
    const ideal = document.querySelector('#ideal');
    const menosPeso = document.querySelector('#menosPeso');
    const valorImc = document.querySelectorAll(".span");
    const ficha = document.querySelector('.container-ficha');
    const nome2 = document.querySelector("#nome-span");
    const idade2 = document.querySelector("#span-idade");
    const altura2 = document.querySelector("#span-altura");
    const peso2 = document.querySelector("#span-peso");
    const imc2 = document.querySelector("#span-imc");

    if(nome.value !== ""){
        console.log('Nome preenchido');
    }else{
        nome.style.border ="red solid 1px";
        menssagem[0].style.display = 'block';
    }
    if(idade.value !== ""){
        console.log('Idade preenchido');
    }else{
        idade.style.border ="red solid 1px";
        menssagem[1].style.display = 'block';
    }
    if(altura.value !== ""){
        console.log('Altura preenchido');
    }else{
        altura.style.border ="red solid 1px";
        menssagem[2].style.display = 'block';
    }
    if(peso.value !== ""){
        console.log('Peso preenchido');
    }else{
        peso.style.border ="red solid 1px";
        menssagem[3].style.display = 'block';
    }
    if(resultado < 18.5){
        let texto = document.createTextNode(resultado);
        valorImc[0].appendChild(texto);
        maisPeso.style.display = 'block';
        ficha.style.display = "inline-block";
    }else if(resultado > 18.5 && resultado < 24.9){
        let texto = document.createTextNode(resultado);
        valorImc[1].appendChild(texto);
        ideal.style.display = 'block';
        ficha.style.display = "inline-block";
    }else if(resultado > 24.9){
        let texto = document.createTextNode(resultado);
        valorImc[2].appendChild(texto);
        menosPeso.style.display = 'block';
        ficha.style.display = "inline-block";
    }
    let name = document.createTextNode(nome.value);
    nome2.appendChild(name);
    let ida = document.createTextNode(idade.value);
    idade2.appendChild(ida);
    let alt = document.createTextNode(altura.value);
    altura2.appendChild(alt);
    let pes = document.createTextNode(peso.value);
    peso2.appendChild(pes);
    let im = document.createTextNode(resultado);
    imc2.appendChild(im);

    return console.log(resultado);
    
}

enviar.addEventListener("click", imc);