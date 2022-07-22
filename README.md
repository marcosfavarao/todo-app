<h1 align="center">
  <img alt="Reactjs Banner" src="https://ik.imagekit.io/marcosfavarao/dashboard/reactjs-animation_w4o38JS8Z.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1658447044847" width="100%">
</h1>

<div align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/marcosfavarao/reactjs-template">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/marcosfavarao/reactjs-template">
  <a href="https://github.com/marcosfavarao/reactjs-template/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/marcosfavarao/reactjs-template">
  </a>
  <a href="https://github.com/marcosfavarao/reactjs-template/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/marcosfavarao/reactjs-template.svg">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen" />
  <a href="https://github.com/marcosfavarao/reactjs-template/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/marcosfavarao/reactjs-template?style=social">
  </a>
</div>

<br />

# React with Typescript template

O repositório é um template clonável, customizado e próprio, pronto para ser utilizado. Elaborado com o intuito de desenvolvimento de projetos utilizando ReactJS puro, removendo a necessidade de configurar e instalar pacotes padrões tais como:

- Linters(ESLint, Prettier...)
- Serviços de requisição(Axios)
- Icones SVG's

Conta com ferramentas úteis pré-desenvolvidas(Currency Formatter) e tema da aplicação configurado, em que neste último, basta apenas adicionar as cores que a mesma possa conter.

<br />

# Estrutura de Pastas

**Estrutura hierárquica**

```
src
|-- common
  |-- assets
    |-- images
    |-- svgs
  |-- styles
  |-- utils
|-- components
|-- hooks
|-- pages
|-- routes
|-- services
|-- App.tsx
|-- index.tsx
```

**Estrutura de componentes:**

```
components
|-- YourComponent
  |-- YourComponent.tsx
  |-- yourcomponent.styles.ts
  |-- index.ts
```

**Estrutura das páginas:**

```
pages
|-- YourPage
  |-- Components
  |-- YourPage.tsx
  |-- yourpage.styles.ts
  |-- index.ts
```

<br />

# Composição das Pastas

<p>Todos os assets e ferramentas uteis que o projeto utiliza, sejam imagens, estilos gobais, fontes, tema, etc...</p>

```
./common
```

<br />

<p>Todos os componentes reutilizáveis pela aplicação toda.</p>

```
./components
```

<br />

<p>Hooks criados compartilhados para facilitar na construção e elaboração dos componentes pelo ciclo de vida deles.</p>

```
./hooks
```

<br />

<p>Páginas containers de cada parte do projeto. São mapeadas e renderizadas mediante as rotas de acesso.</p>

```
./pages
```

<br />

<p>Rotas de acesso. Responsáveis por mapear as páginas e renderizar na DOM.</p>

```
./routes
```

<br />

<p>Serviços de provedor de dados API para aplicação. Contém todos os arquivos e instalação necessárias(axios) para consumação de API's REST.</p>

```
./services
```

<br />

# Como Executar

### Yarn Package Manager

```
$ yarn install

$ yarn start
```

<br />

### NPM Package Manager

```
$ npm install

$ npm start
```

<br />

# Pacotes Instalados

O projeto está configurado com os seguintes pacotes:

<a href="https://reactjs.org/" target="_blank"><img alt="Reactjs" src="https://ik.imagekit.io/marcosfavarao/dashboard/development-icons/minimalists/reactjs-256-minimalist_Uk7GF2fSb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658447123475" style="width: 64px" > </a>
<a href="https://www.typescriptlang.org/" target="_blank"> <img alt="Typescript" src="https://ik.imagekit.io/marcosfavarao/dashboard/development-icons/minimalists/typescript-256-minimalist_qOZA91yRiX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658447123241" style="width: 64px" > </a>
<a href="https://styled-components.com/" target="_blank"> <img alt="Styled-Components" src="https://ik.imagekit.io/marcosfavarao/dashboard/development-icons/minimalists/styledcomponents-256-minimalist_qQ-Mt_IJEb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658447123335" style="width: 64px" > </a>
<a href="https://polished.js.org/" target="_blank"> <img alt="Polished" src="https://ik.imagekit.io/marcosfavarao/dashboard/development-icons/minimalists/polished-256-minimalist_fjFp6ixha.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658447123195" style="width: 64px" > </a>
<a href="https://react-icons.github.io/react-icons/" target="_blank"> <img alt="React Icons" src="https://ik.imagekit.io/marcosfavarao/dashboard/development-icons/minimalists/reacticons-256-minimalist_dlZc4Fvf8x.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658447123465" style="width: 64px" > </a>
<a href="https://reactrouter.com/docs/en/v6/getting-started/overview" target="_blank"> <img alt="React Router DOM" src="https://ik.imagekit.io/marcosfavarao/dashboard/development-icons/minimalists/reactrouterdom-256-minimalist_fjL9REaXT.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658447123444" style="width: 64px" > </a>
<a href="https://axios-http.com/" target="_blank"> <img alt="Axios" src="https://ik.imagekit.io/marcosfavarao/dashboard/development-icons/minimalists/axios-256-minimalist_iaXKq9IlB.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658447122657" style="width: 64px" > </a>
<a href="https://eslint.org/" target="_blank"> <img alt="ESLint" src="https://ik.imagekit.io/marcosfavarao/dashboard/development-icons/minimalists/eslint-256-minimalist_o1mg_Jbdmu.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658447123252" style="width: 64px" > </a>
<a href="https://prettier.io/" target="_blank"> <img alt="Prettier" src="https://ik.imagekit.io/marcosfavarao/dashboard/development-icons/minimalists/prettier-256-minimalist_DoYe3F80U.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658447123396" style="width: 64px" > </a>
<a href="https://editorconfig.org/" target="_blank"> <img alt="Editor Config" src="https://ik.imagekit.io/marcosfavarao/dashboard/development-icons/minimalists/editorconfig-256-minimalist_C9gPtPrCC.png?ik-sdk-version=javascript-1.4.3&updatedAt=1658447123445" style="width: 64px" > </a>

<br />

## Dependências Principais

- Axios
- Polished
- React
- React Icons
- React Router DOM
- Styled-Components
- Typescript

<br />

## Dependências Secundarias

- ESLint
- Prettier
- Editor Config
- Web Vitals
