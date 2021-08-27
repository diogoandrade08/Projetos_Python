const question = document.querySelector('#question');
const answersBox = document.querySelector('#answers-box');
const quizzContainer = document.querySelector('#quizz-container');
const scoreContainer = document.querySelector('#score-container');
const letters = ["a", "b", "c", "d"];
let points = 0;
let actualQuestion = 0;

const questions = [
    {
        "question": "Qual é o meu nome completo?",
        "answers": [
            {
                "answer": "Diogo Gomes de Andrade",
                "correct": true
            },
            {
                "answer": "Diogo Andrade Gomes",
                "correct": false
            },
            {
                "answer": "Diogo de Andrade Teixeira",
                "correct": false
            },
            {
                "answer": "Diogo Amorim Gomes",
                "correct": false
            },
        ]
    },
    {
        "question": "Qual a minha altura?",
        "answers": [
            {
                "answer": "1.82",
                "correct": false
            },
            {
                "answer": "1.75",
                "correct": true
            },
            {
                "answer": "1.69",
                "correct": false
            },
            {
                "answer": "1.79",
                "correct": false
            },
        ]
    },
    {
        "question": "Qual é o esporte que eu mais gosto",
        "answers": [
            {
                "answer": "Futebol",
                "correct": false
            },
            {
                "answer": "Corrida",
                "correct": false
            },
            {
                "answer": "Judô",
                "correct": false
            },
            {
                "answer": "Skate",
                "correct": true
            },
        ]
    },
    {
        "question": "Minha idade?",
        "answers": [
            {
                "answer": "19",
                "correct": true
            },
            {
                "answer": "20",
                "correct": false
            },
            {
                "answer": "21",
                "correct": false
            },
            {
                "answer": "30",
                "correct": false
            },
        ]
    },
    {
        "question": "Qual é meu hobbie em horas vagas?",
        "answers": [
            {
                "answer": "Estudar e andar de skate",
                "correct": true
            },
            {
                "answer": "Empinar pipa",
                "correct": false
            },
            {
                "answer": "Andar de skate e Jogar bola",
                "correct": false
            },
            {
                "answer": "Jogar vídeo game",
                "correct": false
            },
        ]
    },
    {
        "question": "Qual é o estilo de música que eu mais escuto?",
        "answers": [
            {
                "answer": "Forró",
                "correct": false
            },
            {
                "answer": "Rap e Trap",
                "correct": true
            },
            {
                "answer": "Samba e Rap",
                "correct": false
            },
            {
                "answer": "Sertanejo e MPB",
                "correct": false
            },
        ]
    },
    {
        "question": "Tenho quantos irmãos(ã)?",
        "answers": [
            {
                "answer": "Um irmão e duas irmãs",
                "correct": false
            },
            {
                "answer": "Uma irmã e um irmão",
                "correct": false
            },
            {
                "answer": "Um irmão",
                "correct": false
            },
            {
                "answer": "Uma irmã",
                "correct": true
            },
        ]
    },
    {
        "question": "Qual é o meu peso?",
        "answers": [
            {
                "answer": "65 Kg",
                "correct": true
            },
            {
                "answer": "70 kg",
                "correct": false
            },
            {
                "answer": "60 kg",
                "correct": false
            },
            {
                "answer": "63 kg",
                "correct": false
            },
        ]
    },
    {
        "question": "Qual a cor que eu mais gosto",
        "answers": [
            {
                "answer": "Branco",
                "correct": false
            },
            {
                "answer": "Vermelho",
                "correct": false
            },
            {
                "answer": "Preto",
                "correct": true
            },
            {
                "answer": "Azul",
                "correct": false
            },
        ]
    },
    {
        "question": "Qual a marca de roupa que eu mais gosto?",
        "answers": [
            {
                "answer": "DC Shoes",
                "correct": true
            },
            {
                "answer": "Nike",
                "correct": false
            },
            {
                "answer": "Adidas",
                "correct": false
            },
            {
                "answer": "Spitfire",
                "correct": false
            },
        ]
    },
]

function init() {
    /// cria a primeira pergunta
    createQuestion(0);
};

// Iniciar quizz // 
function createQuestion(i) {

    //limpar a questão anterior
    const oldButtons = answersBox.querySelectorAll('button');

    oldButtons.forEach(function (btn) {
        btn.remove();
    });

    // alterar texto

    const questionText = question.querySelector('#question-text');
    const questionNumber = question.querySelector('#question-number');

    questionText.textContent = questions[i].question;
    questionNumber.textContent = i + 1;

    // Insere as alternativas

    questions[i].answers.forEach(function (answers, i) {

        const answerTemplate = document.querySelector('.answer-template').cloneNode(true);

        const letterBtn = answerTemplate.querySelector('.btn-letter');
        const answerText = answerTemplate.querySelector('.question-answer');

        letterBtn.textContent = letters[i];
        answerText.textContent = answers['answer'];

        answerTemplate.setAttribute('correct-answer', answers['correct']);

        //remover hide e template class

        answerTemplate.classList.remove('hide');
        answerTemplate.classList.remove('answer-template');

        // inserir a alternativa na tela

        answersBox.appendChild(answerTemplate);

        // inserir evento de clique

        answerTemplate.addEventListener('click', function () {
            checkAnswers(this);
        });
    });
    // incrementar numero da questao
    actualQuestion++;
};


// verificando respostas do usuário
function checkAnswers(btn) {
    console.log(btn);
    const buttons = answersBox.querySelectorAll('button');

    buttons.forEach(function (button) {
        if (button.getAttribute('correct-answer') === 'true') {
            button.classList.add('correct-answer');

            if (btn === button) {
                points = points + 1;
            }
        } else {
            button.classList.add('wrong-answer');
        }
    });

    // exibir proxima pergunta

    nextQuestion();
}

function nextQuestion() {

    setTimeout(function () {
        if (actualQuestion >= questions.length) {
            showSucccessMessage();
            return;
        }
        createQuestion(actualQuestion);
    }, 700)

}

function showSucccessMessage() {

    hideOrShowQuizz();

    // trocar dados da tela de sucesso

    // calcular o score
    const score = ((points / questions.length) * 100).toFixed(2);

    const displayScore = document.querySelector("#display-score span");

    displayScore.textContent = score.toString();

    // alterar o número de perguntas corretas
    const correctAnswers = document.querySelector("#correct-answer");
    correctAnswers.textContent = points;

    // alterar o total de perguntas
    const totalQuestions = document.querySelector("#question-qty");
    totalQuestions.textContent = questions.length;

}

// Mostra ou esconde o score
function hideOrShowQuizz() {
    quizzContainer.classList.toggle("hide");
    scoreContainer.classList.toggle("hide");
}

// Reiniciar Quizz
const restartBtn = document.querySelector("#restart");

restartBtn.addEventListener("click", function () {

    // zerar o jogo
    actualQuestion = 0;
    points = 0;
    hideOrShowQuizz();
    init();

});

// Inicialização do Quizz
init();
