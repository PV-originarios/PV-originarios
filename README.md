## Hi there 👋

<!--
**PV-originarios/PV-originarios** is a ✨ _special_ ✨ repository because its `README.md` (this file) appears on your GitHub profile.

Here are some ideas to get you started:

- 🔭 I’m currently working on ...
- 🌱 I’m currently learning ...
- 👯 I’m looking to collaborate on ...
- 🤔 I’m looking for help with ...
- 💬 Ask me about ...
- 📫 How to reach me: ...
- 😄 Pronouns: ...
- ⚡ Fun fact: ...
-->
/african-origin-map/
│
├── index.html       # Página principal do mapa
├── about.html       # Página com informações sobre os povos africanos no Brasil
├── quiz.html        # Página com o quiz interativo
├── assets/          # Pasta para imagens e outros arquivos estáticos
│   ├── africa_map.png
│   ├── icons/       # Ícones e imagens para o mapa
│   └── css/
│       └── style.css
├── js/              # Scripts JavaScript
│   ├── map.js       # Código para o mapa interativo
│   ├── quiz.js      # Lógica do quiz
│   └── app.js       # Lógica geral do site
└── README.md        # Documentação do projeto
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mapa Interativo dos Povos Africanos no Brasil</title>
    <link rel="stylesheet" href="https://unpkg.com/leaflet/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet/dist/leaflet.js"></script>
    <style>
        #map {
            height: 500px;
            width: 100%;
        }
    </style>
</head>
<body>
    <h1>Mapa Interativo dos Povos Africanos no Brasil</h1>
    <div id="map"></div>
    <script>
        var map = L.map('map').setView([-15.7801, -47.9292], 5); // Centro aproximado do Brasil

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Exemplo de marcador para uma região histórica
        L.marker([-8.0476, -34.8770]).addTo(map)
            .bindPopup("<b>Recife</b><br>A cidade foi um dos principais portos do tráfico de escravos.")
            .openPopup();
    </script>
</body>
</html>
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Quiz dos Povos Africanos</title>
</head>
<body>
    <h1>Quiz sobre Povos Africanos no Brasil</h1>
    <div id="question"></div>
    <div id="options"></div>
    <button id="nextBtn">Próxima Pergunta</button>

    <script>
        const questions = [
            {
                question: "Qual das etnias africanas teve uma grande influência nas religiões afro-brasileiras, como o Candomblé?",
                options: ["Yoruba", "Bantu", "Hausa", "Zulu"],
                answer: "Yoruba"
            },
            {
                question: "Em que estado brasileiro o maior número de africanos desembarcou durante o período da escravidão?",
                options: ["Bahia", "Rio de Janeiro", "Pernambuco", "São Paulo"],
                answer: "Bahia"
            }
        ];

        let currentQuestion = 0;

        function loadQuestion() {
            document.getElementById('question').textContent = questions[currentQuestion].question;
            let options = '';
            questions[currentQuestion].options.forEach(option => {
                options += `<button onclick="checkAnswer('${option}')">${option}</button><br>`;
            });
            document.getElementById('options').innerHTML = options;
        }

        function checkAnswer(selectedOption) {
            if (selectedOption === questions[currentQuestion].answer) {
                alert("Resposta correta!");
            } else {
                alert("Resposta errada. Tente novamente.");
            }
        }

        document.getElementById('nextBtn').onclick = () => {
            if (currentQuestion < questions.length - 1) {
                currentQuestion++;
                loadQuestion();
            } else {
                alert("Você completou o quiz!");
            }
        };

        loadQuestion();
    </script>
</body>
</html>

