'use strict';

const tbldocumento = require('../models/tbldocumento');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('tblUsuarios', {
      usuId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER(5)
      },
      usuAli: {
        type: Sequelize.STRING(20),
        unique: true,
        allowNull:false
      },
      usuNom: {
        type: Sequelize.STRING(20),
        
        allowNull:false
      },
      usuApe: {
        type: Sequelize.STRING(20),
        allowNull:false
      },
      
      usuEma: {
        type: Sequelize.STRING(50),
        unique: true,
        allowNull:false
      },
      usuPas1: {
        type: Sequelize.STRING(25),
        allowNull:false,
      },
      usuPas2: {
        type: Sequelize.STRING(25),
        allowNull:false,
      },
      usuTel: {
        type: Sequelize.STRING(15),
        allowNull:false
      },
      usuEst: {
        type: Sequelize.TINYINT(1)
      },
      usuDir: {
        type: Sequelize.STRING(15),
        allowNull:true
      },
      usuRolId: {
        type: Sequelize.INTEGER(1),
        references:{
          model:'tblRols',
          key:'rolId'
        }
       
      },
      usuDocId: {
        type: Sequelize.INTEGER(5),
        references:{
          model:'tblDocumentos',
          key:'docId'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }, 
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('tblUsuarios');
  }
};