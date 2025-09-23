const { DataTypes } = require('sequelize');
const dbDetails = require('../../models/index');

const sequelize = dbDetails.sequelize;

const UsersModelDefinition = require('./models/User.model');
exports.User = UsersModelDefinition(sequelize, DataTypes);
