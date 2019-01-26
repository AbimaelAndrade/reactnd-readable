# Projeto Readable

Projeto Leitura: um aplicativo web de conteúdo e comentários.

Descrição:

- A página inicial contém uma lista de posts que podem ser ordenados por data ou votos.
- A lista de posts permite votar positivamente ou negativamente na postagem. para ver mais sobre a postagem é só clicar no título para obter mais informações.
  No topo depos uma lista de categorias.
- Na lateral esquesda têm as apções de ordenar por DATA e VOTOS e log a baixo tem a o botão de nova postagem.
- Dentro do post você terá a opção de comentar e votar assim como a listagem de todos os comentários.
- Dentro do post, você também pode editar e excluír um post ou um comentário.

## Rodando o projeto:

Execute os comandos baixo:

- Instalar as dependências usando `yarn`
- Iniciar o back-end, acesse `cd api-server` e dentro da pasta rode `yarn` e depois `yarn start`.
- Em outro console, crie um arquivo `.env` na raiz do projeto.

```bash
    touch .env
    vi .env
```
- Após o arquivo `.env` criado na raiz do projeto, adicione a key:

```
REACT_APP_API_URL=http://localhost:3001
```
> Antes de iniciar o front-end, confirme se o endereço `http://localhost:3001` do back-end está correto.

- Para iniciar o front-end, use `yarn start` na pasta raiz.

## Bibliotecas utilizadas


|           Name           |                         Function                          |
| :----------------------: | :-------------------------------------------------------: |
|          moment          |               Execente biblioteca para data               |
|          redux           |              Conteiner de estado previsível               |
|       redux-thunk        |          Middleware para requisições assincronas          |
|       react-redux        |                Ligação do React com Redux                 |
|     react-router-dom     |                     Criador de rotas                      |
|    semantic-ui-react     |                     Semantic UI React                     |
|        prop-types        | Runtime type checking for React props and similar objects |
| formsy-semantic-ui-react |         Validações de formulários bem intuitivas          |

## License

MIT © 2019

## Build tool

This project was created using the [Create React App](https://github.com/facebookincubator/create-react-app).
