import Sequelize, { Model } from 'sequelize';

class Collaborator extends Model {
  static init(sequelize) {
    super.init({ 
      name: Sequelize.STRING,
      height: Sequelize.DOUBLE,
      lactose: Sequelize.DOUBLE,
      weight: Sequelize.DOUBLE,
      athlete: Sequelize.DOUBLE,
    },
    {
      sequelize,
    }
    )
  }
}

export default Model