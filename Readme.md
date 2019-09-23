# Koajs API boilerplate

An opinionated boilerplate for Node web APIs focused on separation of concerns and scalability.

## Features

<dl>
  <dt>Multilayer folder structure</dt>
  <dd>
    Code organization inspired by <a href="http://dddcommunity.org/">DDD</a> and <a href="https://8thlight.com/blog/uncle-bob/2012/08/13/the-clean-architecture.html">Clean Architecture</a> focused on codebase scalability.
  </dd>

  <dt>Instant feedback and reload</dt>
  <dd>
    Use <a href="https://www.npmjs.com/package/nodemon">Nodemon</a> to automatically reload the server after a file change when on development mode, makes the development faster and easier.
  </dd>

  <dt>Scalable and easy to use web server</dt>
  <dd>
    Use <a href="https://www.npmjs.com/package/koa">Koajs</a> for requests routing and middlewares. There are some essential middlewares for web APIs already setup, like <a href="https://www.npmjs.com/package/koa-bodyparser">koa-bodyparser</a>, <a href="https://www.npmjs.com/package/koa-compress">koa-compress</a>, <a href="https://www.npmjs.com/package/koa-cors">koa-cors</a>, <a href="https://www.npmjs.com/package/koa-router">koa-router</a> and <a href="https://www.npmjs.com/package/koa-respond"> koa-respond.
  </dd>

  <dt>Database integration</dt>
  <dd>
    <a href="https://www.npmjs.com/package/mongoose">Mongoose</a>, is already integrated, you just have to run the docker container.
  </dd>

  <dt>Logging</dt>
  <dd>
    The <a href="https://www.npmjs.com/package/bristol">Bristol</a> logger an Insanely configurable logging for Node.js
  </dd>
</dl>

## Quick start

1. Clone the repository with `git clone --depth=1 https://github.com/andersondsl/koajs-mongo-docker`
2. Run docker-compose up, to spin up mngo container and a workspace for development
8. Access `http://localhost:3000/users` and you're ready to go!

## Tech

- [Node v11.8.0+](http://nodejs.org/)
- [KoaJS](https://npmjs.com/package/koa)
- [Mongoose](https://www.npmjs.com/package/mongoose)
- [Bristol](https://www.npmjs.com/package/bristol)
- [Nodemon](https://www.npmjs.com/package/nodemon)

## Contributing

This boilerplate is open to suggestions and contributions, documentation contributions are also important!