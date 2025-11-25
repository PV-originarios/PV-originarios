// ==========================================
// APP.JS - Lógica Geral da Aplicação
// ==========================================

const app = {
    // Estado da aplicação
    state: {
        currentQuestion: 0,
        difficulty: 'easy',
        answers: [],
        questions: [],
        showingResults: false
    },

    // Inicializa a aplicação
    init() {
        // Inicializa o mapa se estamos na página index
        const mapElement = document.getElementById('map');
        if (mapElement) {
            initializeMap();
        }

        // Configura event listeners gerais
        this.setupEventListeners();
    },

    // Configura listeners de eventos
    setupEventListeners() {
        // Se estamos em quiz.html, nada mais a fazer aqui
        // Os listeners são adicionados conforme necessário
    },

    // ==================== QUIZ ====================

    // Inicia o quiz
    startQuiz() {
        // Obtém dificuldade selecionada
        const difficultyInput = document.querySelector('input[name="difficulty"]:checked');
        this.state.difficulty = difficultyInput ? difficultyInput.value : 'easy';

        // Obtém as perguntas da dificuldade selecionada
        this.state.questions = shuffleArray(quizData[this.state.difficulty]);
        this.state.currentQuestion = 0;
        this.state.answers = new Array(this.state.questions.length).fill(null);
        this.state.showingResults = false;

        // Mostra a tela do quiz
        this.showScreen('quiz-screen');
        this.loadQuestion();
    },

    // Carrega uma pergunta
    loadQuestion() {
        const question = this.state.questions[this.state.currentQuestion];
        
        // Atualiza texto da pergunta
        document.getElementById('question-text').textContent = question.question;

        // Atualiza progresso
        const progress = ((this.state.currentQuestion) / this.state.questions.length) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
        document.getElementById('current-question').textContent = this.state.currentQuestion + 1;
        document.getElementById('total-questions').textContent = this.state.questions.length;

        // Embaralha opções
        const shuffledOptions = shuffleArray(question.options);

        // Renderiza opções
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        shuffledOptions.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = option;

            // Se já respondeu, mostra resposta
            if (this.state.answers[this.state.currentQuestion] !== null) {
                btn.disabled = true;
                if (option === question.answer) {
                    btn.classList.add('correct');
                } else if (option === this.state.answers[this.state.currentQuestion]) {
                    btn.classList.add('wrong');
                }
            }

            btn.addEventListener('click', () => {
                this.answerQuestion(option, btn);
            });

            optionsContainer.appendChild(btn);
        });

        // Atualiza botões de navegação
        document.getElementById('prev-btn').disabled = this.state.currentQuestion === 0;
        document.getElementById('next-btn').textContent = 
            this.state.currentQuestion === this.state.questions.length - 1 
                ? 'Ver Resultados' 
                : 'Próxima →';
    },

    // Responde uma pergunta
    answerQuestion(selectedOption, button) {
        const question = this.state.questions[this.state.currentQuestion];

        // Marca a resposta
        this.state.answers[this.state.currentQuestion] = selectedOption;

        // Desabilita todos os botões
        const allButtons = document.querySelectorAll('.option-btn');
        allButtons.forEach(btn => {
            btn.disabled = true;
            if (btn.textContent === question.answer) {
                btn.classList.add('correct');
            } else if (btn === button && selectedOption !== question.answer) {
                btn.classList.add('wrong');
            }
        });
    },

    // Próxima pergunta
    nextQuestion() {
        // Se respondeu a pergunta atual, pode avançar
        if (this.state.answers[this.state.currentQuestion] === null) {
            alert('Por favor, responda a pergunta antes de continuar.');
            return;
        }

        if (this.state.currentQuestion < this.state.questions.length - 1) {
            this.state.currentQuestion++;
            this.loadQuestion();
        } else {
            this.showResults();
        }
    },

    // Pergunta anterior
    previousQuestion() {
        if (this.state.currentQuestion > 0) {
            this.state.currentQuestion--;
            this.loadQuestion();
        }
    },

    // Mostra resultados
    showResults() {
        // Calcula estatísticas
        let correctCount = 0;
        this.state.questions.forEach((question, index) => {
            if (this.state.answers[index] === question.answer) {
                correctCount++;
            }
        });

        const wrongCount = this.state.questions.length - correctCount;
        const percentage = Math.round((correctCount / this.state.questions.length) * 100);

        // Atualiza elementos
        document.getElementById('correct-count').textContent = correctCount;
        document.getElementById('wrong-count').textContent = wrongCount;
        document.getElementById('percentage').textContent = percentage + '%';

        // Define mensagem baseado no percentual
        let title, message, icon;
        if (percentage === 100) {
            title = '🌟 Perfeito!';
            message = 'Você é um especialista em povos africanos!';
            icon = '🏆';
        } else if (percentage >= 80) {
            title = '⭐ Excelente!';
            message = 'Parabéns! Você tem um ótimo conhecimento.';
            icon = '🎉';
        } else if (percentage >= 60) {
            title = '✅ Bom!';
            message = 'Você tem um bom conhecimento. Continue aprendendo!';
            icon = '👍';
        } else if (percentage >= 40) {
            title = '📚 Continuar Aprendendo';
            message = 'Você está no caminho certo. Aprenda mais na seção de curiosidades!';
            icon = '🌱';
        } else {
            title = '💪 Tente Novamente';
            message = 'Recomendamos ler mais sobre o tema. Visite a página de curiosidades!';
            icon = '🔄';
        }

        document.getElementById('results-title').textContent = title;
        document.getElementById('results-message').textContent = message;
        document.getElementById('results-icon').textContent = icon;

        // Detalh dos resultados
        const detailsContainer = document.getElementById('results-details');
        detailsContainer.innerHTML = '';

        const detailsTitle = document.createElement('h3');
        detailsTitle.textContent = 'Detalhes das Respostas';
        detailsTitle.style.marginBottom = '1rem';
        detailsTitle.style.textAlign = 'left';
        detailsTitle.style.color = 'var(--dark-color)';
        detailsContainer.appendChild(detailsTitle);

        this.state.questions.forEach((question, index) => {
            const resultItem = document.createElement('div');
            const isCorrect = this.state.answers[index] === question.answer;
            resultItem.className = `result-item ${isCorrect ? 'correct' : 'wrong'}`;

            const questionDiv = document.createElement('div');
            questionDiv.className = 'result-item-question';
            questionDiv.textContent = `${index + 1}. ${question.question}`;

            const answerDiv = document.createElement('div');
            answerDiv.className = 'result-item-answer';
            answerDiv.innerHTML = `
                <strong>Sua resposta:</strong> ${this.state.answers[index]} ${isCorrect ? '✓' : '✗'}<br>
                <strong>Resposta correta:</strong> ${question.answer}<br>
                <em>${question.explanation}</em>
            `;

            resultItem.appendChild(questionDiv);
            resultItem.appendChild(answerDiv);
            detailsContainer.appendChild(resultItem);
        });

        // Mostra tela de resultados
        this.showScreen('results-screen');
    },

    // Mostra uma tela específica
    showScreen(screenId) {
        // Esconde todas as telas
        document.querySelectorAll('.quiz-screen').forEach(screen => {
            screen.classList.remove('active');
        });

        // Mostra a tela desejada
        const targetScreen = document.getElementById(screenId);
        if (targetScreen) {
            targetScreen.classList.add('active');
            window.scrollTo(0, 0);
        }
    }
};

// Inicializa quando o documento está pronto
document.addEventListener('DOMContentLoaded', function() {
    app.init();
});

// Para debugging em console
console.log('%c🌍 Povos Africanos no Brasil', 'font-size: 20px; color: #FF6B6B; font-weight: bold;');
console.log('%cProjeto Educativo Interativo', 'font-size: 12px; color: #4ECDC4;');
console.log('Visite: index.html | about.html | quiz.html');
