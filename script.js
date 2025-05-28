function StartQuiz() {
  const botao = document.querySelector("button");
  botao.style.display = "none";
  showQuestion();
}

let currentQuestionIndex = 0;
let score = 0;
let currentQuiz = [];

const quizzes = {
    facil: [
        {
            question: "Qual é a capital do Brasil?",
            options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
            correctAnswer: "Brasília"
        },
        {
            question: "Qual a cor do céu em um dia claro?",
            options: ["Azul", "Vermelho", "Verde", "Amarelo"],
            correctAnswer: "Azul"
        },
        {
            question: "Quantos dias tem uma semana?",
            options: ["10", "8", "9", "7"],
            correctAnswer: "7"
        },
        {
            question: "Qual é o maior planeta do Sistema Solar?",
            options: ["Terra", "Marte", "Júpiter", "Saturno"],
            correctAnswer: "Júpiter"
        },
        {
            question: "Qual é o primeiro mês do ano?",
            options: ["Março", "Janeiro", "Dezembro", "Fevereiro"],
            correctAnswer: "Janeiro"
        }
    ],
    medio: [
        {
            question: "Qual é o elemento químico mais abundante no universo?",
            options: ["Oxigênio", "Carbono", "Hidrogênio", "Hélio"],
            correctAnswer: "Hidrogênio"
        },
        {
            question: "Em que ano começou a Primeira Guerra Mundial?",
            options: ["1914", "1918", "1939", "1945"],
            correctAnswer: "1914"
        },
        {
            question: "Qual é a capital da Austrália?",
            options: ["Sydney", "Melbourne", "Canberra", "Perth"],
            correctAnswer: "Canberra"
        },
        {
            question: "Quantos ossos tem o corpo humano adulto?",
            options: ["206", "186", "216", "196"],
            correctAnswer: "206"
        },
        {
            question: "Qual é o segundo planeta mais próximo do Sol?",
            options: ["Mercúrio", "Vênus", "Terra", "Marte"],
            correctAnswer: "Vênus"
        }
    ],
    dificil: [
        {
            question: "Qual é o menor número primo de 4 dígitos?",
            options: ["1009", "1007", "1003", "1001"],
            correctAnswer: "1009"
        },
        {
            question: "Quem foi o primeiro cientista a descrever a teoria da relatividade especial?",
            options: ["Isaac Newton", "Albert Einstein", "Niels Bohr", "Max Planck"],
            correctAnswer: "Albert Einstein"
        },
        {
            question: "Qual é o elemento químico com número atômico 79?",
            options: ["Prata", "Platina", "Ouro", "Mercúrio"],
            correctAnswer: "Ouro"
        },
        {
            question: "Em que ano foi descoberto o primeiro exoplaneta?",
            options: ["1992", "1995", "1989", "1998"],
            correctAnswer: "1992"
        },
        {
            question: "Qual é a constante matemática conhecida como número de Euler?",
            options: ["2.7182", "3.1415", "1.6180", "1.4142"],
            correctAnswer: "2.7182"
        }
    ]
};

function selectDifficulty(level) {
    currentQuiz = quizzes[level];
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    document.body.innerHTML = "<h1>Quiz do Biel</h1>";

    const perguntaAtual = currentQuiz[currentQuestionIndex];
    const perguntaDiv = document.createElement("div");
    perguntaDiv.className = "pergunta";
    perguntaDiv.innerText = perguntaAtual.question;
    document.body.appendChild(perguntaDiv);

    perguntaAtual.options.forEach(function(opcao, index) {
        const botaoOpcao = document.createElement("button");
        botaoOpcao.innerText = opcao;
        botaoOpcao.style.animationDelay = `${index * 0.1}s`;

        botaoOpcao.onclick = function() {
            // Desabilita todos os botões
            document.querySelectorAll('button').forEach(btn => {
                btn.style.pointerEvents = 'none';
                btn.classList.add('disabled-button');
            });

            const isCorrect = opcao === perguntaAtual.correctAnswer;
            
            if (isCorrect) {
                this.classList.remove('disabled-button');
                this.classList.add('correct-answer');
                score++;
            } else {
                this.classList.remove('disabled-button');
                this.classList.add('wrong-answer');
                
                // Mostra qual era a resposta correta
                document.querySelectorAll('button').forEach(btn => {
                    if (btn.innerText === perguntaAtual.correctAnswer) {
                        btn.classList.remove('disabled-button');
                        btn.classList.add('correct-answer');
                    }
                });
            }

            setTimeout(() => {
                currentQuestionIndex++;

                if (currentQuestionIndex < currentQuiz.length) {
                    showQuestion();
                } else {
                    showResultadoFinal();
                }
            }, 1500);
        };

        document.body.appendChild(botaoOpcao);
    });

    // Adiciona o footer com Instagram
    addInstagramFooter();
}

function showResultadoFinal() {
    document.body.innerHTML = "<h1>Quiz do Biel</h1>";
    const resultado = document.createElement("div");
    resultado.innerText = `Parabéns! Você terminou o quiz!\nSua pontuação foi ${score} de ${currentQuiz.length}`;
    document.body.appendChild(resultado);
    
    const voltarButton = document.createElement("button");
    voltarButton.innerText = "Escolher Outra Dificuldade";
    voltarButton.onclick = function() {
        window.location.reload();
    };
    document.body.appendChild(voltarButton);

    // Adiciona o footer com Instagram
    addInstagramFooter();
}

// Função auxiliar para adicionar o footer com Instagram
function addInstagramFooter() {
    const footer = document.createElement('footer');
    const link = document.createElement('a');
    link.href = 'https://instagram.com/biielzin.cardoso';
    link.target = '_blank';
    link.className = 'instagram-link';
    
    const icon = document.createElement('i');
    icon.className = 'fab fa-instagram';
    
    link.appendChild(icon);
    link.appendChild(document.createTextNode('@biielzin.cardoso'));
    
    footer.appendChild(link);
    document.body.appendChild(footer);
}  