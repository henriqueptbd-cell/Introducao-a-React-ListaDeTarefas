# Lista de Tarefas em React

Este projeto é uma aplicação de introdução ao React desenvolvida no contexto da plataforma TIC em Trilhas. A ideia principal foi construir uma lista de tarefas com conceitos básicos do React, como componentes, estado, contexto, rotas e integração com uma API local.

## 🌐 Projeto publicado

A versão online está disponível em: https://introducao-a-react-lista-de-tarefas.vercel.app/

## ✨ Funcionalidades

- Adicionar novas tarefas
- Listar tarefas cadastradas
- Editar o nome de uma tarefa
- Remover tarefas
- Navegação entre páginas com React Router
- Consumo de API com Axios e JSON Server

## 🛠️ Tecnologias utilizadas

- React
- Vite
- React Router DOM
- Axios
- JSON Server
- CSS Modules

## ▶️ Como executar localmente

1. Clone o repositório
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor da API local:
   ```bash
   npm run server
   ```
4. Em outro terminal, inicie a aplicação:
   ```bash
   npm run dev
   ```

A aplicação ficará disponível em http://localhost:5173 e a API em http://localhost:3333.

## ⚙️ Variáveis de ambiente

O projeto usa uma variável de ambiente para apontar para o backend. Um exemplo está disponível no arquivo `.env.example`.

## 📁 Estrutura do projeto

- `src/components` — componentes reutilizáveis da interface
- `src/pages` — páginas principais da aplicação
- `src/contexts` — contexto global da aplicação
- `src/services` — configuração da API
- `db.json` — dados utilizados pelo JSON Server

## 📌 Observações

Este projeto foi pensado como um exemplo de aprendizado inicial em React e pode ser usado como base para evoluções futuras.

## 💡 Sobre o aprendizado

Este projeto foi uma ótima oportunidade para entender na prática os conceitos básicos do React, desde a criação de componentes até o uso de estado, contexto e rotas. Também aprendi a importância de organizar a estrutura do projeto, separar responsabilidades e conectar a interface com uma API. Foi um passo importante na minha jornada de estudos e me deu mais confiança para continuar evoluindo como desenvolvedor.
