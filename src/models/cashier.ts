/* eslint-disable camelcase */
import { Model, DataTypes, HasMany } from 'sequelize';
import { db } from '../db';
import Schedule from './schedule';

export enum Sex {
  male = 'MALE',
  female = 'FEMALE'
}

export interface ICashier {
  id?: number
  supermarket_id: number
  first_name: string
  last_name: string
  sex: Sex
  age: number
  schedule_id?: number
  work_experience: number
  previous_job: string
}

export default class Cashier extends Model implements ICashier {
  public id!: number;

  public age!: number;

  public first_name!: string;

  public last_name!: string;

  public schedule_id!: number;

  public sex!: Sex;

  public supermarket_id!: number;

  public work_experience!: number;

  public previous_job!: string;

  static Schedule: HasMany<Cashier, Schedule>;
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
  sex: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  work_experience: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  previous_job: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  sequelize: db,
  tableName: 'cashiers',
  timestamps: false,
  underscored: true,
});

Cashier.Schedule = Cashier.hasMany(Schedule, { foreignKey: 'cashier_id' });
