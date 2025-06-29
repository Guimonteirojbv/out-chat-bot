<h1 align="center" id="top"> OurChatBot</h1>

<img src="" width='100%' alt="Imagem 1"/>
 

> 🔎 Chat Bot, <a href=""> Link do projeto </a>

## :page_facing_up: Desafio Técnico: ChatBot

**Visão Geral**:
Este desafio tem como objetivo testar as minhas habilidades com Next, TypeScript, e muito mais para a vaga de Desenvolvedor Front-end Jr.

**Requisitos Funcionais**:
• Ao acessar a página inicial é possível interagir com o ChatBot
• Ao enviar a mensagem para o chat. receber uma resposta
• Ao clicar no botão "Limpar conversa", deve-se limpar o chat.
  
## 🎯 Steps

**Configuração Inicial**:

- Inicializei o projeto utilizando NextJs, TypeScript, ShadCn e tailwind para uma base sólida e eficiente.

**Estrutura :**

- Criei uma estrutura organizada para facilitar a manutenção e escalabilidade do projeto.
- Dividi as pastas principais em **components, contexts, services, actions, app, providers**.

Este é um breve guia sobre a estrutura de pastas do projeto. Aqui está uma visão geral das pastas principais:

- **App**: Aqui é onde estão as rotas da aplicação.

- **components**: Aqui estão localizados os componentes reutilizáveis do React, que são unidades independentes de interface do usuário. 

- **contexts**: Utilizamos a Context API do React para gerenciar o estado global da aplicação. Este diretório é o hub central para o compartilhamento de dados entre componentes.

- **services**: Este diretório agrupa partes relacionadas à integração com a API, como a criação de baseUrl.

- **actions**: Aqui ficam os arquivos de ações que vão ser utilizadas no lado servidor da aplicação.

- **errors**: Este diretório são os arquivos para tratamentos de erros.

- **providers**: Aqui é onde crio os componentes de providers dos contextos da aplicação.

**Implementação Inicial:**

- Na raiz do projeto, construi um aplicação funcional, para que depois eu pudesse refatorar.
- Minha ideia nesse projeto foi usar o mínimo de bibliotecas possíveis, tive como objetivo fazer a maioria das coisas na mão.
- Organizei as operações iniciais e a estrutura funcional.

**Refatoração e Organização:**

- Refatorei o código inicial,adicionando componentes reutilizáveis.
- Crie a integração com a api seguindo os conceitos de inversão de dependência para maior desacoplamento.

**Contexto:**

- Criei um contexto nas pasta contexts para gerenciar o histórico do chat e interagir com o botão de limpar conversa no header da aplicação.

**Estilização Responsiva:**

- Utilizando o tailwind e shadCn para componentes prontos, criei um design responsivo.

**Aprimoramentos Adicionais:**

- Adicionei recursos como um componente de loading para indicar carregamento de dados.


## 📁 Screens Mobile

<div style="display: flex; justify-content: space-between;">

</div>

## 📁 Screens Desktop
<div style="display: flex; justify-content: space-between;">

</div>


## 🔗 Links
| Ambiente     |  URL                             |
| ---          |  ---                             |
| Local        |  http://localhost:3000/         |                 |


## :white_check_mark: Requerimentos

Antes de iniciar :checkered_flag:, você precisa ter o [Git](https://git-scm.com) e o [Node](https://nodejs.org/en/) instalados.

## :checkered_flag: Iniciar

```
#  Clone este projeto
$ git clone https://github.com/Guimonteirojbv/out-chat-bot.git

# Acessar
$ cd out-chat-bot
$ git checkout guilherme-monteiro-rodrigues

# Instalar dependências
$ npm i

# Execute o projeto
$ npm run dev
# O servidor será inicializado em http://localhost:3000
``
