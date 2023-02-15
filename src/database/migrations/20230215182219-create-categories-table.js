'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
  await queryInterface.createTable('categories', {
    id: {
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      type: sequelize.DataTypes.INTEGER

    },
    name: {
      allowNull: false,
      type: sequelize.DataTypes.STRING
    },
    position: {
      allowNull: false,
      unique: true,
      type: sequelize.DataTypes.INTEGER
    },
    created_at: {
      allowNull:false,
    type: sequelize.DataTypes.DATE
  },
  updated_at: {
    allowNull:false,
    type: sequelize.DataTypes.DATE
  }

  })
  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('categories')
  }
};
