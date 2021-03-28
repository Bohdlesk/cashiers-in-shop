/* eslint-disable camelcase */
import { Model, DataTypes } from 'sequelize';
import { db } from '../db';
import Schedule from './schedule';
import Supermarket from './supermarket';

enum Sex {
  male = 'MALE',
  female = 'FEMALE'
}

interface ICashier {
  id: number
  supermarket_id: number
  first_name: string
  last_name: string
  sex: Sex
  age: number
  cashier_number: number
  schedule_id: number
}

export default class Cashier extends Model implements ICashier {
  public id!: number;

  public age!: number;

  public cashier_number!: number;

  public first_name!: string;

  public last_name!: string;

  public schedule_id!: number;

  public sex!: Sex;

  public supermarket_id!: number;
}

Cashier.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  supermarket_id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    references: {
      model: Supermarket,
      key: 'id',
    },
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  cashier_number: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  schedule_id: {
    type: DataTypes.NUMBER,
    allowNull: false,
    references: {
      model: Schedule,
      key: 'id',
    },
  },

}, {
  sequelize: db,
  tableName: 'cashiers',
  timestamps: false,
});
