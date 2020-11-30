'use strict';
const {generatePass} = require('../helper/bcrypt')

module.exports = (sequelize, DataTypes) => {
  class User extends sequelize.Sequelize.Model{

  }

  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING
  },{
    sequelize
  })

User.beforeCreate((user, options) => {
  return user.password = generatePass(user.password)
});

  return User;
};