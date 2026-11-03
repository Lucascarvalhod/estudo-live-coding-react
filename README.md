# react-live-code

Laboratório pessoal de estudo de **React**, usado para praticar ferramentas do
ecossistema, arquitetura de front-end e boas práticas de desenvolvimento
aplicáveis inclusive a aplicações legadas.

A aplicação em si é um pequeno e-commerce (listagem de produtos com busca e
carrinho de compras), consumindo a [Fake Store API](https://fakestoreapi.com).
O foco do repositório, porém, não é o produto final, e sim os aprendizados
registrados ao longo da sua construção.

## Objetivos de estudo

Este projeto é usado para experimentar e consolidar conhecimento em:

- **[Redux Toolkit](https://redux-toolkit.js.org/)** — gerenciamento de estado
  global (`configureStore`, `createSlice`, `useSelector`/`useDispatch`),
  aplicado ao estado do carrinho de compras.
- **[React Router DOM](https://reactrouter.com/)** — roteamento client-side
  (`BrowserRouter`, `Routes`/`Route`) entre as páginas da aplicação.
- **Arquitetura de front-end** — organização em camadas (componentes, páginas,
  hooks, serviços, store e tipos), composição de hooks e separação de
  responsabilidades.
- **Boas práticas em aplicações legadas** — tipagem incremental com
  TypeScript, isolamento de efeitos colaterais (fetch, cache, cancelamento de
  requisições) e padrões que facilitam manutenção e evolução de código.

A documentação detalhada da arquitetura (estrutura de pastas, camadas, fluxo
de dados e decisões de design) está em
[DOCS/arquiteture.md](./DOCS/arquiteture.md).

## Stack

- React 19 + TypeScript
- Redux Toolkit + React Redux
- React Router DOM v7
- styled-components
- Create React App (react-scripts)

## Estrutura (resumo)

```
src/
├── components/   # Componentes de UI (card, filtro, grid, header)
├── hooks/        # Hooks customizados (debounce, filtro, busca de produtos)
├── pages/        # Páginas/rotas (home, cart, registrer)
├── services/     # Integração com a API externa
├── store/        # Redux Toolkit (store + slices)
└── types/        # Tipos de domínio compartilhados
```

Detalhes completos em [DOCS/arquiteture.md](./DOCS/arquiteture.md).

## Como rodar o projeto

Pré-requisitos: [Node.js](https://nodejs.org/) e [Yarn](https://yarnpkg.com/).

```powershell
yarn install
yarn start
```

A aplicação sobe em modo de desenvolvimento em `http://localhost:3000`.

### Outros scripts

| Comando       | Descrição                                           |
|---------------|------------------------------------------------------|
| `yarn start`  | Inicia o servidor de desenvolvimento (hot-reload)     |
| `yarn test`   | Executa a suíte de testes em modo interativo          |
| `yarn build`  | Gera o build de produção em `build/`                  |
| `yarn eject`  | Expõe a configuração interna do Create React App      |
