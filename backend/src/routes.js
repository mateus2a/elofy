import { Router } from 'express';

import CollaboratorController from './app/controllers/CollaboratorController'

const routes = new Router();

routes.post('/collaborators', CollaboratorController.store);
routes.put('/collaborators/:collaboratorId', CollaboratorController.update);
routes.delete('/collaborators/:id', CollaboratorController.delete);

module.exports = routes;
