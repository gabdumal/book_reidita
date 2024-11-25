# Começando no React com um jogo Idle Clicker

Este livro pretende ensinar a criar um jogo do gênero _Idle Clicker_ para a Web.

## Instalação

### PNPM

Abra o terminal.\
Digite algum dos comandos abaixo, a depender do seu sistema operacional:

```bash
# Linux, macOS e WSL
curl -fsSL https://get.pnpm.io/install.sh | sh -

# Windows
Invoke-WebRequest https://get.pnpm.io/install.ps1 -UseBasicParsing | Invoke-Expression
```

**Feche** e abra o terminal novamente.\
Digite `pnpm -v`\
Verifique se a versão mais recente foi instalada.

```bash
$ pnpm -v
9.12.3
```

### NODE.JS

Digite `pnpm env use --global lts`\
Digite `node -v`\
Verifique se a versão LTS mais recente foi instalada.

```bash
$ node -v
v20.18.0
```

### Vite

Abra um novo terminal e digite os seguintes comandos:

```bash
# Cria um novo projeto React com Typescript
pnpm create vite idle-clicker --template react-ts

# Acessa o diretório do projeto
cd idle-clicker

# Instala as dependências do projeto
pnpm i -D prettier-plugin-organize-imports
pnpm install

# Inicia o servidor de desenvolvimento
pnpm run dev
```

Aguarde a criação do projeto ser realizada.\
Abra [http://localhost:5173](http://localhost:5173) para visualizar o projeto no seu navegador.

## Acesso ao livro

Acesse este livro para a Web [neste link](https://gabdumal.github.io/book_reidita/).
