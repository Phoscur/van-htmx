import express from 'express';
import bodyParser from 'body-parser';
import Chance from 'chance';
import compression from 'compression';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

import page from './src/page.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 3000;
const app = express();
const chance = new Chance();

let username = '';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/dist'));
app.use(express.static(__dirname + '/assets'));
app.use(compression());

app.get('/', (req, res) => {
  username = chance.name();
  res.send(page(req.query));
});

app.post('/like/:id', (req, res) => {
  /*
  const { id } = req.params;
  const tweet = tweets.find(t => t.id === id);
  tweet.likes += 1;
  const likes  = pug.compileFile('views/components/likes.pug');
  const markup = likes({ t: tweet });
  res.send(markup);
  */
  res.send('hello');
});

app.listen(PORT);
console.log('root app listening on port:', PORT);
