# Gerenciador de Tarefas - Desafio DevStart SENAI

Este projeto é um Gerenciador de Tarefas simples e eficiente, desenvolvido como parte do desafio prático do curso DevStart do SENAI. O objetivo principal é criar uma aplicação web funcional para organizar e acompanhar suas tarefas diárias, permitindo adicionar, editar, marcar como concluída e excluir tarefas.

![image](https://github.com/user-attachments/assets/d688191c-3136-4e20-a525-71e7e4c03413)

![image](https://github.com/user-attachments/assets/c69dab9f-ebe8-4933-90d8-582501862425)


## Descrição do Projeto

O Gerenciador de Tarefas oferece uma interface intuitiva para que você possa facilmente:

- **Adicionar Novas Tarefas**: Crie tarefas com título e descrição para lembrar de todas as suas atividades.
- **Listar Tarefas**: Visualize suas tarefas pendentes e concluídas de forma organizada.
- **Marcar Tarefas como Concluídas**: Acompanhe seu progresso marcando as tarefas que já foram finalizadas.
- **Editar Tarefas**: Atualize o título ou a descrição de tarefas existentes quando necessário.
- **Excluir Tarefas**: Remova tarefas que não são mais relevantes.
- **Persistência de Dados**: As tarefas são salvas no navegador utilizando `localStorage`, garantindo que seus dados sejam mantidos mesmo após fechar e reabrir o navegador.

## Tecnologias Utilizadas

Este projeto foi desenvolvido utilizando as seguintes tecnologias principais do ecossistema JavaScript e React:

- **React**: Biblioteca JavaScript para construção de interfaces de usuário reativas e componentizadas.
- **Context API do React**: Para gerenciamento de estado global da aplicação, facilitando o compartilhamento de dados e funções entre diferentes componentes.
- **React Router**: Para navegação entre diferentes páginas da aplicação (Adicionar Tarefa, Editar Tarefa, Página Inicial) sem recarregar a página.
- **LocalStorage**: Para persistência dos dados das tarefas diretamente no navegador do usuário, garantindo que as tarefas sejam salvas localmente.
- **UUID (v4)**: Para geração de IDs únicos para cada tarefa, garantindo a correta identificação e manipulação das mesmas, especialmente em listas dinâmicas.

## Como Rodar o Projeto Localmente

Para executar este projeto no seu ambiente local, siga os seguintes passos:

### Clone este repositório:
```bash
git clone [URL_DO_REPOSITORIO]
cd [NOME_DO_REPOSITORIO]
```
Substitua `[URL_DO_REPOSITORIO]` pela URL do seu repositório no GitHub e `[NOME_DO_REPOSITORIO]` pelo nome da pasta que será criada.

### Instale as dependências do projeto:

Certifique-se de ter o Node.js e o npm (ou yarn) instalados na sua máquina. Em seguida, execute o seguinte comando na raiz do projeto:

```bash
npm install
```
Ou
```bash
yarn install
```

### Inicie o servidor de desenvolvimento:

Para iniciar a aplicação em modo de desenvolvimento, execute o seguinte comando:

```bash
npm start
```
Ou
```bash
yarn start
```

### Acesse a aplicação no navegador:

Abra seu navegador web e acesse o seguinte endereço:

```
http://localhost:3000
```

O Gerenciador de Tarefas estará rodando localmente e pronto para ser utilizado!

## Desafio DevStart SENAI

Este projeto foi desenvolvido como um desafio prático do curso DevStart do SENAI. O objetivo principal do desafio era aplicar os conhecimentos adquiridos durante o curso no desenvolvimento de uma aplicação web funcional utilizando React e suas ferramentas.

---

Feito por Athos Ishikawa



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
