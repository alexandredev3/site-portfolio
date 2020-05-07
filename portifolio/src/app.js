import express from 'express';
import nunjucks from 'nunjucks';

import routes from './routes';

class App {
  constructor() {
    this.server = express();
    this.server.use(express.static('src/public'))
    // Estou configurando o express para usar arquivos estaticos.
    // css, imagens, fontes, etc...

    this.routes();
    this.nunjucks();
  }

  routes() {
    this.server.use(routes);
  }

  nunjucks() {
    nunjucks.configure('src/views', {
      express:this.server,
      // Eu vou usar o express e qual variavel eu estou usando.
      autoescape: false,
      // Ele permite nos colocarmos codigo html nas variaveis do nunjucks.
      noCache: true
    })
    // views e a pasta

    this.server.set('view engine', 'njk');
    // na view engine so vai ser usado njk.
  }
}

export default new App().server;