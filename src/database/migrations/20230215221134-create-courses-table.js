'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('courses', {
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

      synopsis: {
        allowNull:false,
        type: sequelize.DataTypes.TEXT
      },
      thumbnail_url: {
        type: sequelize.DataTypes.STRING
      },
      featured: {
        defaultValue: false,
        type: sequelize.DataTypes.BOOLEAN
      },
      category_id: {
        allowNull: false,
        type: sequelize.DataTypes.INTEGER,
        references: { model: 'categories', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
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
  await queryInterface.dropTable('courses')
  }
};
