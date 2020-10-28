import Sequelize, { Model } from 'sequelize';

class Collaborator extends Model {
  static init(sequelize) {
    super.init({ 
      name: Sequelize.STRING,
      height: Sequelize.DOUBLE,
      lactose: Sequelize.BOOLEAN,
      weight: Sequelize.DOUBLE,
      athlete: Sequelize.BOOLEAN,
    },
    {
      sequelize,
    })
  }
}

export default Collaborator