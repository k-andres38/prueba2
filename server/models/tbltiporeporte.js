'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tblTipoReporte extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // tblTipoReporte.hasMany(models.tblReporte,{
      //   foreignKey:'repTipRepId'
      // })

      
        tblTipoReporte.hasMany(models.tblReporte,{
          foreignKey:'repTipRepId',
          
        })
      
    }
  }
  tblTipoReporte.init({
    tipRepId: {
      type: DataTypes.INTEGER(5),
      primaryKey: true,
      autoIncrement: true
    },
    tipRepNom: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tblTipoReporte',
  });
  return tblTipoReporte;
};