import { Router } from 'express';

const routes = new Router();

import videos from './data';

routes.get('/', (req, res) => {
  const data = {
    avatar_url: 'https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
    name: 'Mayk Brito',
    role: 'Instrutor - Rocketseat',
    description: 'Programador full-stack, focado em trazer o melhor ensino para iniciantes em programação. Colaborador da <a href="https://rocketseat.com.br" target="_blank">Rocketseat</a>',
    links: [
      {
        name: 'Github',
        url: 'https://gist.github.com/maykbrito/'
      },
      {
        name: 'Twitter',
        url: 'https://www.twitter.com/maykbrito/'
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/maykbrito/'
      },
    ]
  }

  return res.render('about', { data });
    // Eu vou rendelizar o index que estar dentro da views.
    // { data: data } e a mesma coisa de fazer isso, estamos usando shoot links
});

routes.get('/portfolio', (req, res) => {
  return res.render('portfolio', { items: videos });
  /* { items: videos } estou criando um propriedade items, e colocando a constande
  dentro dele */
});

routes.get('/video', (req, res) => {
  const id = req.query.id;
  // Estou pegando a id atravez do query

  const video = videos.find((video) => {
    return video.id == id;
    // E a mesma coisa de fazer com o if.
  });

  if (!video) {
    return res.send('Vídeo not found!');
  }

  return res.render('video', { item: video });
  // Se ele encontrar o video ele vai rendelizar a pagina de vídeos.
});

export default routes;