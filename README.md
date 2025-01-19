<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).

# Rural Producer API

API para gerenciamento de produtores rurais, propriedades e culturas.

## Requisitos

- Node.js
- PostgreSQL
- npm ou yarn

## Instalação

```bash
# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env
# Edite o arquivo .env com suas configurações

# Iniciar o banco de dados
npm run db:dev:up

# Iniciar a aplicação
npm run start:dev
```

## Documentação da API (Swagger)

A documentação completa da API está disponível através do Swagger UI.

Para acessar:
1. Inicie a aplicação
2. Acesse: `http://localhost:3000/docs`

### Endpoints Principais

#### Produtores
- POST /produtor - Criar produtor
- GET /produtor - Listar produtores
- GET /produtor/:id - Buscar produtor
- PUT /produtor/:id - Atualizar produtor
- DELETE /produtor/:id - Remover produtor

#### Propriedades
- POST /propriedade - Criar propriedade
- GET /propriedade - Listar propriedades
- GET /propriedade/:id - Buscar propriedade
- PUT /propriedade/:id - Atualizar propriedade
- DELETE /propriedade/:id - Remover propriedade

#### Culturas
- POST /cultura - Criar cultura
- GET /cultura - Listar culturas
- GET /cultura/:id - Buscar cultura
- PUT /cultura/:id - Atualizar cultura
- DELETE /cultura/:id - Remover cultura

### Exemplos de Uso via Swagger

1. Primeiro, crie um produtor:
```json
{
  "nome": "João da Silva",
  "cpfCnpj": "123.456.789-00"
}
```

2. Use o ID do produtor para criar uma propriedade:
```json
{
  "nome": "Fazenda São João",
  "cidade": "São Paulo",
  "estado": "SP",
  "areaTotal": 100,
  "areaAgricultavel": 80,
  "areaVegetacao": 20,
  "produtorId": 1
}
```

3. Use o ID da propriedade para criar uma cultura:
```json
{
  "nome": "Soja",
  "safra": "Safra 2023/2024",
  "dataPlantio": "2023-10-01",
  "dataColheita": "2024-03-15",
  "propriedadeId": 1
}
```
