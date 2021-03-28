/* eslint-disable camelcase */
import { Model, DataTypes } from 'sequelize';
import { db } from '../db';

interface ISupermarket {
  id: number
  address: string
}

export default class Supermarket extends Model implements ISupermarket {
  public id!: number;

  public address!: string;
}

Supermarket.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'supermarkets',
  timestamps: false,
});
