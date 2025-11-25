# 📖 Guia: Como Publicar no GitHub Pages

## Passo 1: Criar o Repositório no GitHub

1. Acesse [github.com](https://github.com)
2. Clique no ícone "+" no topo direito
3. Selecione "New repository"
4. Nome do repositório: `PV-originarios` (ou qualquer outro nome)
5. Descrição: "Mapa Interativo dos Povos Africanos no Brasil"
6. Selecione "Public" (para que o GitHub Pages funcione)
7. Clique em "Create repository"

## Passo 2: Preparar o Repositório Local

```bash
# Entre no diretório do projeto
cd /workspaces/PV-originarios

# Inicie um repositório git (se ainda não tiver)
git init

# Configure seu nome e email (use seus dados do GitHub)
git config user.name "Seu Nome"
git config user.email "seu.email@github.com"

# Adicione todos os arquivos
git add .

# Faça o primeiro commit
git commit -m "Projeto inicial: Mapa Interativo dos Povos Africanos no Brasil"
```

## Passo 3: Conectar ao Repositório Remoto

```bash
# Adicione o repositório remoto (substitua SEU_USUARIO e SEU_REPO)
git remote add origin https://github.com/SEU_USUARIO/SEU_REPO.git

# Faça push para o GitHub
git branch -M main
git push -u origin main
```

## Passo 4: Ativar GitHub Pages

1. Acesse seu repositório no GitHub
2. Vá para **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em "Source", selecione:
   - Branch: `main`
   - Folder: `/ (root)`
5. Clique em "Save"

## Passo 5: Acessar o Site

Seu site estará disponível em:
```
https://SEU_USUARIO.github.io/SEU_REPO/
```

Exemplo:
```
https://meu-usuario.github.io/PV-originarios/
```

## Atualizações Futuras

Para fazer atualizações:

```bash
# Faça as alterações nos arquivos

# Adicione as mudanças
git add .

# Faça um commit
git commit -m "Descrição das mudanças"

# Faça push
git push
```

As mudanças serão refletidas no GitHub Pages automaticamente!

## Troubleshooting

### GitHub Pages não está atualizado
- Aguarde alguns minutos (GitHub Pages pode levar até 5 minutos para atualizar)
- Force o refresh da página (Ctrl+Shift+R ou Cmd+Shift+R)
- Verifique se o branch `main` está selecionado em Settings

### Imagens ou CSS não carregam
- Verifique os caminhos dos arquivos (devem ser caminhos relativos)
- Certifique-se de que os arquivos foram adicionados ao git

### O mapa não aparece
- Verifique se o Leaflet.js está carregando corretamente (abra o console do navegador)
- Certifique-se de que tem conexão com a internet

## Dicas Extras

### Usar um domínio personalizado
1. Em Settings → Pages
2. Clique em "Add a domain"
3. Siga as instruções para configurar seu domínio

### Adicionar um arquivo .nojekyll
Se tiver problemas com o Jekyll:

```bash
echo "" > .nojekyll
git add .nojekyll
git commit -m "Add .nojekyll"
git push
```

## Recursos Úteis

- [Documentação GitHub Pages](https://docs.github.com/en/pages)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-The-Basics)
- [Leaflet.js Documentation](https://leafletjs.com/)

---

**Boa sorte publicando seu projeto! 🚀**
