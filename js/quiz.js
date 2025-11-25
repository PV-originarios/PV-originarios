// ==========================================
// QUIZ.JS - Lógica do Quiz Interativo
// ==========================================

const quizData = {
    easy: [
        {
            question: "Qual das etnias africanas teve uma grande influência nas religiões afro-brasileiras, como o Candomblé?",
            options: ["Yorubá", "Bantu", "Hausa", "Zulu"],
            answer: "Yorubá",
            explanation: "Os Yorubás trouxeram uma cosmologia rica que formou a base do Candomblé."
        },
        {
            question: "Em que estado brasileiro o maior número de africanos desembarcou durante o período da escravidão?",
            options: ["Bahia", "Rio de Janeiro", "Pernambuco", "São Paulo"],
            answer: "Bahia",
            explanation: "Salvador, na Bahia, foi o principal porto do tráfico atlântico."
        },
        {
            question: "Qual palavra abaixo tem origem africana?",
            options: ["Samba", "Escola", "Livro", "Janela"],
            answer: "Samba",
            explanation: "Samba vem do Bantu 'semba'. Muitas palavras portuguesas têm origem africana."
        },
        {
            question: "O que é um quilombo?",
            options: ["Uma dança africana", "Uma comunidade de resistência", "Um instrumento musical", "Um tipo de comida"],
            answer: "Uma comunidade de resistência",
            explanation: "Quilombos eram comunidades formadas por pessoas escravizadas que fugiram."
        },
        {
            question: "Qual foi o maior quilombo da história do Brasil?",
            options: ["Quilombo dos Palmares", "Quilombo de Taboca", "Quilombo do Ambrósio", "Quilombo de Oitenta"],
            answer: "Quilombo dos Palmares",
            explanation: "Palmares, liderado por Zumbi, durou 67 anos e é símbolo de resistência."
        }
    ],
    medium: [
        {
            question: "Qual líder é considerado o símbolo máximo de resistência africana no Brasil?",
            options: ["Zumbi dos Palmares", "Ganga Zumba", "Henrique Dias", "João Fernandes"],
            answer: "Zumbi dos Palmares",
            explanation: "Zumbi dos Palmares liderou a resistência contra o sistema escravocrata português."
        },
        {
            question: "Em que século o Brasil foi o maior destino do tráfico negreiro?",
            options: ["XV", "XVI", "XVII e XVIII", "XIX"],
            answer: "XVII e XVIII",
            explanation: "O pico do tráfico foi entre 1700 e 1800, especialmente no século XVIII."
        },
        {
            question: "Qual das seguintes afirmações sobre os Bantus é verdadeira?",
            options: [
                "Eram únicos na região sudeste",
                "Eram o maior grupo trazido ao Brasil",
                "Não influenciaram a língua portuguesa",
                "Chegaram apenas no século XIX"
            ],
            answer: "Eram o maior grupo trazido ao Brasil",
            explanation: "Os Bantus foram numericamente o maior grupo de escravizados trazidos."
        },
        {
            question: "O Candomblé é uma religião que combina elementos de:",
            options: [
                "Só de povos Yorubás",
                "Yorubás, Bantu e Catolicismo",
                "Indígenas e Portugueses",
                "Árabes e Persas"
            ],
            answer: "Yorubás, Bantu e Catolicismo",
            explanation: "O Candomblé é uma síntese de tradições africanas e catolicismo."
        },
        {
            question: "Qual era o principal produto econômico que justificava o tráfico?",
            options: ["Ouro", "Açúcar e café", "Especiarias", "Madeira"],
            answer: "Açúcar e café",
            explanation: "A economia colonial dependia da mão de obra escravizada para plantações."
        },
        {
            question: "A palavra 'batuque' tem origem em qual língua africana?",
            options: ["Yorubá", "Bantu (Quimbundo)", "Árabe", "Zulu"],
            answer: "Bantu (Quimbundo)",
            explanation: "Batuque vem do Bantu 'ba-tuque', significando ritmo ou dança."
        },
        {
            question: "Quantas pessoas africanas foram trazidas ao Brasil durante a escravidão?",
            options: ["1 milhão", "2 milhões", "Aproximadamente 4,9 milhões", "10 milhões"],
            answer: "Aproximadamente 4,9 milhões",
            explanation: "O Brasil recebeu mais africanos escravizados que qualquer outro país nas Américas."
        }
    ],
    hard: [
        {
            question: "Qual era o nome da zona portuária onde escravizados eram vendidos em Salvador?",
            options: ["Mercado Valongo", "Valongo", "Porto Saveiro", "Ancoradouro Africano"],
            answer: "Valongo",
            explanation: "O Valongo, em Salvador, era o mercado de escravizados mais importante da cidade."
        },
        {
            question: "Em qual data o Brasil foi o último país a abolir a escravidão nas Américas?",
            options: ["1865", "1875", "1888", "1900"],
            answer: "1888",
            explanation: "13 de maio de 1888 - Abolição da escravidão no Brasil (Lei Áurea)."
        },
        {
            question: "Qual é a diferença principal entre o Candomblé Ketu e o Candomblé Bantu?",
            options: [
                "Um é mais recente que o outro",
                "Um segue a tradição Yorubá e outro a Bantu",
                "Um é mais popular",
                "Não há diferença real"
            ],
            answer: "Um segue a tradição Yorubá e outro a Bantu",
            explanation: "Candomblé Ketu segue tradição Yorubá; Candomblé Bantu segue tradição Bantu."
        },
        {
            question: "Quantos quilombos foram registrados durante o período colonial no Brasil?",
            options: ["Menos de 10", "Cerca de 100", "Centenas ou milhares", "Nenhum registro"],
            answer: "Centenas ou milhares",
            explanation: "Estima-se que havia centenas de quilombos em diferentes períodos."
        },
        {
            question: "Qual etnias africanas tinha maior presença no litoral sul do Brasil?",
            options: ["Yorubá", "Jeje", "Banto", "Fon"],
            answer: "Banto",
            explanation: "Os Bantus distribuíram-se mais pelo litoral sul, especialmente Rio e São Paulo."
        },
        {
            question: "A 'Revolta dos Malês' ocorreu em qual cidade?",
            options: ["Rio de Janeiro", "Salvador", "Recife", "São Luís"],
            answer: "Salvador",
            explanation: "1835 - Levante de muçulmanos escravizados em Salvador. Importante resistência urbana."
        },
        {
            question: "Qual foi aproximadamente a duração da existência de Palmares?",
            options: ["30 anos", "50 anos", "67 anos", "100 anos"],
            answer: "67 anos",
            explanation: "Palmares existiu de 1595 a 1694, aproximadamente 67 anos de resistência."
        },
        {
            question: "Qual era o papel da 'Casa-Grande' nas relações com povos africanos?",
            options: [
                "Centro comercial de escravizados",
                "Moradia de senhores sobre plantações escravistas",
                "Local de celebrações religiosas",
                "Mercado de produtos africanos"
            ],
            answer: "Moradia de senhores sobre plantações escravistas",
            explanation: "A Casa-Grande era o centro da dominação colonial sobre escravizados."
        },
        {
            question: "O 'jongo' é uma expressão cultural que combina:",
            options: [
                "Dança de guerra Yorubá",
                "Poesia, dança e ritmo Bantu",
                "Música religiosa do Candomblé",
                "Festa católica com influência africana"
            ],
            answer: "Poesia, dança e ritmo Bantu",
            explanation: "Jongo é uma forma de expressão Bantu com poesia cifrada, dança e ritmo."
        },
        {
            question: "Qual é a origem etimológica da palavra 'samba'?",
            options: [
                "Do Yorubá 'sambalê'",
                "Do Bantu 'semba' (umbigada)",
                "Do Português 'sambuca'",
                "Do Árabe 'samsam'"
            ],
            answer: "Do Bantu 'semba' (umbigada)",
            explanation: "Samba vem do Quimbundo 'semba', uma dança de aproximação corporal."
        }
    ]
};

// Função para inicializar o quiz
function initializeQuiz() {
    // Nada a fazer aqui, o app.js será responsável
}

// Função auxiliar para embaralhar array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Exporta dados se usando módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { quizData, shuffleArray };
}
