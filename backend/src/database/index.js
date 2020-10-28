import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Collaborator from '../app/models/Collaborator'

const models = [Collaborator];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
