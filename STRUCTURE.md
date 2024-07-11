Entendendo decisões arquiteturais e a estrutura do projeto
Requisitos para rodar o projeto
Setup de ambiente:
NEXT 14
Usando npm
npm installx    x   
Como rodar na minha máquina?
Clone o projeto git clone https://github.com/Lohuama/investment-app
Rode npm run dev
ou
Rode npm run build e npm run start
Pronto 🎉
techguide.sh Site
Estrutura do projeto
./src/app/: É a página que o Next.js usa para montar o sistema de roteamento
./src/app/components: São todos os pedaços primordiais de interface como componentes de formulário, <Typography> (para qualquer texto) e o <Box>
<Typography>: Uma componente do @mui/material para textos.
<Box>: É nossa abstração para criar estilos, sempre use um box e nunca crie um styled component diretamente no projeto.
Ele recebe uma prop chamada styleSheet e a mesma pode receber ou uma chave com nome de propriedade do CSS com seu valor, ou ao invés de o valor você pode passar um objeto com a resolução que a propriedade deve ser aplicada.
Exemplo:
<Box styleSheet={{ color: 'red' }} /> ou <Box styleSheet={{ color: { xs: 'red', md: 'blue' } }} />;
./src/stories: Onde ficam localizados os componentes interativos do Storybook
./src/types: onde ficam os types necessarios para tipagem dos dados.
./src/utils: onde ficam as funções utilitárias do projeto.
./src/app/styles: onde ficam os estilos globais do projeto.
Como me localizar no projeto?
Todas as páginas do projeto estão listadas em ./app
Todos os componentes estão em ./src/components
Uma vez dentro de uma página você pode ir navegando pelos componentes para ir se encontrando e fazer a alteração que deseja
