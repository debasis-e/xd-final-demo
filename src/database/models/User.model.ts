
'use strict';
import { Model, Sequelize } from 'sequelize';

export interface UserAttributes {
  email: string;
  name: string;
  isUserValid: boolean;
  password: string;
  createdBy?: string;
  createdAt?: Date;
  updatedAt?: Date | null;
  updatedBy?: string | null;
}
module.exports = (sequelize: Sequelize, DataTypes: any) => {
  class User extends Model<UserAttributes> {
    static associate(models: any) {
      // define association here
    }
  }

  User.init(
    {
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isUserValid: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      createdBy: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      updatedBy: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'User',
      timestamps: true,
    },
  );

  return User;
};
