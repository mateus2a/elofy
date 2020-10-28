import { Router } from 'express';

import CollaboratorController from './app/controllers/CollaboratorController'

const routes = new Router();

routes.post('/collaborators', CollaboratorController.store);

module.exports = routes;
