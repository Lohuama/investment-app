# Investment App

Este é um projeto Next.js para gerenciar detalhes de investimentos.

## Primeiros Passos

Primeiramente, clone o repositório e instale as dependências:

```bash
git clone <url-do-repositorio>
cd investment-app
npm install

Em seguida, você pode iniciar o servidor de desenvolvimento:

npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev

Abra http://localhost:3000 no seu navegador para ver o resultado.

Você pode começar a editar a página modificando pages/index.tsx. A página é atualizada automaticamente conforme você edita o arquivo.

Este projeto utiliza o Next.js para renderização no servidor e roteamento, e inclui recursos de otimização para fontes usando next/font para carregar e otimizar automaticamente fontes como a Inter, uma fonte personalizada do Google.

Storybook
Para visualizar e desenvolver componentes de forma isolada, você pode usar o Storybook. Primeiramente, instale as dependências necessárias:

npm install --save-dev @storybook/react

Em seguida, adicione um script ao seu package.json para iniciar o Storybook:

{
  "scripts": {
    "storybook": "start-storybook -p 6006"
  }
}

Para criar arquivos de histórias (stories) para seus componentes, crie um diretório stories na raiz do seu projeto e adicione os arquivos .stories.tsx para cada componente. Por exemplo, AreaChartComponent.stories.tsx.

Dentro de cada arquivo .stories.tsx, você pode escrever histórias para seus componentes usando o Storybook.

Saiba Mais
Para aprender mais sobre o Next.js, confira os seguintes recursos:

Documentação do Next.js - aprenda sobre os recursos e API do Next.js.
Aprenda Next.js - um tutorial interativo do Next.js.
Você também pode conferir o repositório do Next.js no GitHub para mais informações e contribuir para o projeto.

Deploy no Vercel
A forma mais simples de fazer o deploy do seu aplicativo Next.js é utilizando a Plataforma Vercel criada pelos criadores do Next.js.

Confira a documentação de deploy do Next.js para mais detalhes sobre como fazer o deploy da sua aplicação.


Este README.md agora inclui uma seção sobre o Storybook, explicando como configurar e usar o Storybook para desenvolvimento de componentes no projeto Next.js.
