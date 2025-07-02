## 🌍 Lista de Países com Next.js 13

Este mini-projeto foi desenvolvido com o objetivo de praticar recursos do Next.js 15, consumindo a REST Countries API para exibir uma interface de países com detalhes como bandeira, população, idiomas e países vizinhos.



## 🧪 Tecnologias Utilizadas

Framework: Next.js 15

Linguagens: TypeScript, HTML, CSS, JavaScript

API pública: REST Countries

Recursos do App Router:

Server Components

Data Fetching (assincrônico com fetch)

Nested Layouts (layout.tsx)

Rotas dinâmicas ([name]/page.tsx)

Tratamento de loading (loading.tsx) e erro (error.tsx)



## 💡 Funcionalidades

✅ Listagem de países com nome em português e bandeira

✅ Página de detalhes ao clicar em um país:

Capital, continente, sub-região

População (com formatação compacta, ex: 1M, 25K)

Línguas faladas

Países que fazem fronteira (com link para navegar entre eles)

✅ Design responsivo: funciona em desktops, tablets e celulares

✅ Navegação fluida com componentes assíncronos (Server Components)



## 🔗 API Utilizada

GET https://restcountries.com/v3.1/all?fields=name,flags,capital,region,translations,subregion,population,languages,borders,cca3



## 🚀 Como rodar localmente 

# 1. Clone o repositório
- git clone https://github.com/debizinha-santos/mp-lista-de-paises-next.git
- cd mp-lista-de-paises-next

# 2. Instale as dependências
npm install

# 3. Execute em ambiente de desenvolvimento
npm run dev

# Acesse http://localhost:3000/



## Como acessar o projeto

Acesse em seu navegador: 
https://mp-lista-de-paises-next-eight.vercel.app/


## ❓ FAQ
Posso usar outra versão do Next.js?
Este projeto foi feito para praticar a versão 13 do Next.js, com foco no novo sistema de roteamento (App Router). Sinta-se livre para adaptar para versões diferentes, mas a estrutura atual usa Server Components.

Posso usar features experimentais?
Sim! Como o projeto é voltado ao aprendizado, você pode explorar recursos ainda em fase alpha/beta, com atenção à documentação oficial.



## 📚 Inspiração

Desafio inspirado no projeto:

REST Countries API with color theme switcher – Frontend Mentor
