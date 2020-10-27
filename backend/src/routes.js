import { Router } from 'express';

const routes = new Router();

routes.post('/', (req, res) => {
  res.send('Hello')
});

module.exports = routes;
