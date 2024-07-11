# Entendendo Decisões Arquiteturais e a Estrutura do Projeto

## Requisitos para Rodar o Projeto

- NEXT 14
- npm

## Setup de Ambiente

### Usando npm
```sh
npm install

Como Rodar na Minha Máquina?
- Clone o projeto:

git clone https://github.com/Lohuama/investment-app

- Rode:

npm run dev


ou

npm run build && npm run start
Pronto 🎉

Estrutura do Projeto

./src/app/            : É a página que o Next.js usa para montar o sistema de roteamento
./src/app/components  : São todos os pedaços primordiais de interface como componentes de formulário, (para qualquer texto) e o : Uma componente do @mui/material para textos. : É nossa abstração para criar estilos, sempre use um box e nunca crie um styled component diretamente no projeto. Ele recebe uma prop chamada styleSheet e a mesma pode receber ou uma chave com nome de propriedade do CSS com seu valor, ou ao invés de o valor você pode passar um objeto com a resolução que a propriedade deve ser aplicada. Exemplo: <Box styleSheet={{ color: 'red' }} /> ou <Box styleSheet={{ color: { xs: 'red', md: 'blue' } }} />;
./src/stories         : Onde ficam localizados os componentes interativos do Storybook
./src/types           : Onde ficam os types necessários para tipagem dos dados
./src/utils           : Onde ficam as funções utilitárias do projeto
./src/app/styles      : Onde ficam os estilos globais do projeto

## Como me localizar no projeto?

Todas as páginas do projeto estão listadas em ./app/app
Todos os componentes estão em ./app/src/components
Uma vez dentro de uma página você pode ir navegando pelos componentes para ir se encontrando e fazer a alteração que deseja
