'use strict';

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable('Book', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey:  true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      author: {
        allowNull: false,
        type: DataTypes.STRING
      },
      pageQuantity: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      createAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
     return queryInterface.dropTable('Book')
  },
};
