# 🎮 IDEx ("ai di ex") - Processo Seletivo de novos membros IDE 2026-1

Uma interface front-end moderna, responsiva e dinâmica para uma loja virtual de jogos, desenvolvida como ferramenta de avaliação do processo seletivo de novos membros da IDE JR / UFRGS. O projeto foi construído com foco em performance, componentização visual e lógica robusta de JavaScript sem dependência de bibliotecas pesadas.


## ✨ Destaques e Funcionalidades

* **Single Source of Truth (Fonte Única de Verdade):** Catálogo e Carrossel são gerados dinamicamente a partir de um único Array de objetos no JavaScript, facilitando a manutenção e garantindo consistência de dados.
* **Carrossel de Esteira Infinita:** Implementado 100% em Vanilla JS. Utiliza `IntersectionObserver` para clonagem de elementos em tempo real e cálculo matemático de rolagem (`scrollTo`) para evitar saltos indesejados na tela do usuário.
* **Renderização Condicional:** Lógica de exibição inteligente de preços (tags de desconto e preços originais só aparecem se existirem no banco de dados).
* **Validação de Formulário Customizada:** Uso de Expressões Regulares (Regex) em JavaScript para validação de e-mail em tempo real, sobrepondo o comportamento padrão do navegador com feedback visual imersivo.
* **Layout Responsivo Avançado:** Utilização intensiva do sistema de grid e flexbox do Tailwind, incluindo componentes com altura restrita e rolagem interna (`overflow-y-auto`) no Desktop.
* **Easter Egg Interativo:** Lógica oculta de detecção de múltiplos cliques rápidos implementada em arquivo separado (`default.js`), contendo manipulação de opacidade e injeção de vídeo com *autoplay*.


## 🛠️ Tecnologias e Ferramentas Utilizadas

* **HTML5:** Estruturação semântica.
* **CSS3 & Tailwind CSS:** Estilização utilitária por CDN para prototipagem e responsividade.
* **Vanilla JavaScript (ES6+):** Lógica de negócios, manipulação do DOM e observadores de interseção.
* **Google Fonts:** Tipografia (Roboto).
* **Git & GitHub:** Versionamento de código.

## 🚀 Como executar o projeto localmente

Como o projeto foi desenvolvido focado no Front-End puro (Vanilla JS e Tailwind via CDN), ele não requer configurações complexas de ambiente, Node.js ou empacotadores (bundlers).


### Opção 1: Via VS Code com Node.JS (Recomendado)
A melhor forma de visualizar o projeto garantindo que todas as requisições de arquivos locais e imagens funcionem perfeitamente.

1. Clone este repositório para a sua máquina:

   ```git clone [https://github.com/dnugo/ps-ide6.git)```

2. Instale o Node.JS no seu computador

3. Abra a pasta do projeto no Visual Studio Code.

4. Execute no terminal o comando ``node server.js``


### Opção 2: Via VS Code com Live Server
Uma forma simples e igualmente funcionadl de rodar um servidor web para acessar o projeto.

1. Clone este repositório para a sua máquina:

   ``git clone [https://github.com/dnugo/ps-ide6.git](https://github.com/dnugo/ps-ide6.git)``

2. Abra a pasta do projeto no Visual Studio Code.

3. Instale a extensão Live Server (caso ainda não tenha).

4. Clique com o botão direito no arquivo index.html e selecione "Open with Live Server".

5. O projeto abrirá automaticamente no seu navegador padrão (geralmente em http://127.0.0.1:5500).


### Opção 3: Execução Direta
1. Baixe o código fonte como arquivo .zip ou faça o clone do repositório.

2. Extraia os arquivos em uma pasta na sua máquina.

3. Dê um duplo clique no arquivo index.html para abri-lo diretamente no seu navegador. (Nota: dependendo do nível de segurança do seu computador, é possível que a página não carregue ou seja exibida totalmente ou corretamente)


## 📁 Estrutura de Arquivos
``/``
``├── assets/             # Imagens, logos e ícones``
``├── index.html          # Estrutura principal da página, Tailwind e Scripts de UI``
``├── style.css           # Estilos customizados complementares ao Tailwind``
``└── README.md           # Documentação do projeto``


======
Projeto desenvolvido por Diego Fernandes Silva (``dnugo``) para o Processo Seletivo de novos membros IDE JR 2026-1