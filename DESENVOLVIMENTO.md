# 🔧 Guia de Desenvolvimento

Este documento fornece informações para desenvolvedores que desejam melhorar ou estender o projeto.

## 🏗️ Arquitetura

O projeto segue uma estrutura simples e modular:

```
index.html (mapa)
├─ app.js (orquestração)
├─ map.js (lógica do mapa)
└─ style.css

about.html (curiosidades)
├─ app.js
└─ style.css

quiz.html (quiz)
├─ app.js (gerencia o estado)
├─ quiz.js (dados das perguntas)
└─ style.css
```

## 📝 Estrutura de Dados

### Dados do Mapa (map.js)

```javascript
const mapData = {
    locations: [
        {
            name: "Cidade",
            coords: [-latitude, -longitude],
            type: "traffic|cultural|resistance",
            ethnias: ["Etnia1", "Etnia2"],
            info: "Informação do local",
            cultural: "Contribuições",
            facts: "Curiosidades"
        }
    ]
}
```

### Dados do Quiz (quiz.js)

```javascript
const quizData = {
    easy: [ /* 5 perguntas */ ],
    medium: [ /* 7 perguntas */ ],
    hard: [ /* 10 perguntas */ ]
}

// Estrutura de cada pergunta
{
    question: "Texto da pergunta",
    options: ["Opção 1", "Opção 2", "Opção 3", "Opção 4"],
    answer: "Opção correta",
    explanation: "Explicação da resposta"
}
```

## 🔄 Fluxo da Aplicação

### Quiz Flow

1. **Intro Screen** → Usuário seleciona dificuldade
2. **Quiz Screen** → Apresenta perguntas
3. **Results Screen** → Mostra pontuação e detalhes

```
app.startQuiz()
  ↓
app.loadQuestion()
  ↓
app.answerQuestion() / app.nextQuestion() / app.previousQuestion()
  ↓
app.showResults()
```

## 🎨 Customizações Comuns

### Adicionar novo local ao mapa

No arquivo `js/map.js`, adicione um novo objeto ao array `locations`:

```javascript
{
    name: "Novo Local",
    coords: [-12.5, -38.5],  // [lat, lng]
    type: "traffic",          // traffic, cultural, ou resistance
    ethnias: ["Yorubá"],
    info: "<b>Nome</b><br>Descrição",
    cultural: "Contribuições",
    facts: "Curiosidades"
}
```

### Adicionar nova pergunta ao quiz

No arquivo `js/quiz.js`, adicione ao array apropriado (`easy`, `medium`, ou `hard`):

```javascript
{
    question: "Qual é a pergunta?",
    options: ["Resposta 1", "Resposta 2", "Resposta 3", "Resposta 4"],
    answer: "Resposta correta",
    explanation: "Por que está correta"
}
```

### Alterar cores do tema

No arquivo `assets/css/style.css`, modifique as variáveis CSS:

```css
:root {
    --primary-color: #FF6B6B;      /* Vermelho */
    --secondary-color: #4ECDC4;    /* Verde-azul */
    --tertiary-color: #FFD93D;     /* Amarelo */
    --dark-color: #2C3E50;         /* Azul escuro */
    --light-color: #ECF0F1;        /* Cinza claro */
}
```

## 🚀 Funcionalidades Futuras

### Curto Prazo
- [ ] Adicionar mais locais ao mapa (15-20)
- [ ] Expandir banco de perguntas (50-100 perguntas)
- [ ] Implementar sistema de medalhas/badges
- [ ] Adicionar sons de feedback (correto/incorreto)

### Médio Prazo
- [ ] Criar versão em inglês
- [ ] Adicionar imagens dos locais
- [ ] Implementar timeline interativa
- [ ] Adicionar áudio com pronunciação de palavras africanas
- [ ] Sistema de favoritos/salvar progresso (localStorage)

### Longo Prazo
- [ ] Backend com banco de dados
- [ ] Sistema de usuários e login
- [ ] Multiplayer quiz
- [ ] Leaderboard global
- [ ] App mobile (React Native/Flutter)
- [ ] VR/AR para experiência no mapa
- [ ] Integração com redes sociais

## 🧪 Testes

### Testar Localmente
```bash
# Abrir arquivo HTML diretamente
open index.html

# Ou usar um servidor local
python -m http.server 8000
# Acessar em http://localhost:8000
```

### Verificar no Navegador
1. Abra o console (F12)
2. Verifique se há erros
3. Teste todas as funcionalidades

### Checklist de Testes

- [ ] Mapa carrega corretamente
- [ ] Marcadores aparecem
- [ ] Pop-ups funcionam ao clicar
- [ ] Zoom funciona
- [ ] Menu de navegação está funcional
- [ ] Quiz inicia
- [ ] Perguntas carregam
- [ ] Respostas são validadas
- [ ] Resultados mostram corretamente
- [ ] Responsivo em mobile

## 📚 Recursos de Aprendizado

### JavaScript
- [MDN Web Docs](https://developer.mozilla.org/)
- [JavaScript.info](https://javascript.info/)

### Leaflet.js
- [Leaflet Documentation](https://leafletjs.com/reference.html)
- [Leaflet Tutorials](https://leafletjs.com/examples.html)

### CSS
- [CSS Tricks](https://css-tricks.com/)
- [Grid by Example](https://gridbyexample.com/)

### Git
- [Git Book](https://git-scm.com/book)
- [GitHub Guides](https://guides.github.com/)

## 🐛 Debug Tips

### Consola do Navegador
```javascript
// Verificar estado do app
console.log(app.state);

// Verificar dados do mapa
console.log(mapData.locations);

// Verificar dados do quiz
console.log(quizData);

// Teste de função
app.startQuiz();
```

### Ferramentas Recomendadas
- **Chrome DevTools** - Inspetor de elementos, console
- **VS Code** - Editor de código
- **GitHub Desktop** - Interface Git visual
- **Lighthouse** - Auditoria de performance

## 🔒 Boas Práticas

1. **Semântica HTML**
   - Use tags semânticas (`<header>`, `<main>`, `<section>`)
   - Mantenha hierarquia de headings correta

2. **Acessibilidade**
   - Sempre adicione `alt` em imagens
   - Use `aria-label` quando necessário
   - Teste com leitores de tela

3. **Performance**
   - Minifique CSS/JS em produção
   - Otimize imagens
   - Use lazy loading quando apropriado

4. **Código Limpo**
   - Nomes descritivos para variáveis
   - Comentários em seções complexas
   - Mantenha funções pequenas e focadas

5. **Versionamento**
   - Commits com mensagens claras
   - Uma funcionalidade por branch
   - Pull requests descritivos

## 📞 Suporte para Contribuições

Se quiser contribuir:

1. Fork o repositório
2. Crie uma branch (`git checkout -b feature/sua-feature`)
3. Commit suas mudanças (`git commit -am 'Add sua-feature'`)
4. Push para a branch (`git push origin feature/sua-feature`)
5. Abra um Pull Request

## 📖 Documentação Adicional

- Veja `README.md` para visão geral do projeto
- Veja `GITHUB_PAGES_GUIDE.md` para publicação
- Veja comentários no código para detalhes de implementação

---

**Versão**: 1.0  
**Última Atualização**: Novembro 2025

Divirta-se desenvolvendo! 🎉
