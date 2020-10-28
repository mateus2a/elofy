'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('collaborators', { 
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      height: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      lactose: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      weight: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      athlete: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
     
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('collaborators');
  }
};
