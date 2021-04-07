/* eslint-disable camelcase */
import { Model, DataTypes } from 'sequelize';
import { db } from '../db';

export interface ISchedule {
  id: number
  supermarket_id: number
  cashier_id: number
  cashbox_number: number
}

export default class Schedule extends Model implements ISchedule {
  public id!: number;

  public supermarket_id!: number;

  public cashier_id!: number;

  public cashbox_number!: number;
}

Schedule.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  cashbox_number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'schedules',
  timestamps: false,
  underscored: true,
});
