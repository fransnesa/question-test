'use strict';
module.exports = (sequelize, DataTypes) => {
  class question extends sequelize.Sequelize.Model{

  }

  question.init({
    uuid: DataTypes.UUID,
    question: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    createdBy: DataTypes.STRING,
    updatedBy: DataTypes.STRING,
  },{
    sequelize
  })

  return question;
};
