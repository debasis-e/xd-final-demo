'use strict';

import { create } from "domain";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface: any, Sequelize: any) {
    await queryInterface.createTable('Users', {
      email: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false,
        unique: true
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      isUserValid: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdBy: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      updatedBy: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,

      },
    });
  },
  async down(queryInterface: any, Sequelize: any) {
    await queryInterface.dropTable('Users');
  },
};
