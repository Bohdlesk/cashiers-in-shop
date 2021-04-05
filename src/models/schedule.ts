/* eslint-disable camelcase */
import { Model, DataTypes } from 'sequelize';
import { db } from '../db';

export enum Shift {
  day = 'DAY',
  night = 'NIGHT'
}
export enum Days {
  monday= 'MONDAY',
  tuesday = 'TUESDAY',
  wednesday = 'WEDNESDAY',
  thursday = 'THURSDAY',
  friday = 'FRIDAY',
  saturday = 'SATURDAY',
  sunday = 'SUNDAY',
}

export interface ISchedule {
  id: number
  supermarket_id: number
  cashier_id: number
  cashbox_number: number
  day: Days
  shift: Shift
}

export default class Schedule extends Model implements ISchedule {
  public id!: number;

  public supermarket_id!: number;

  public cashier_id!: number;

  public cashbox_number!: number;

  public day!: Days;

  public shift!: Shift;
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
  day: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  shift: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'schedules',
  timestamps: false,
  underscored: true,
});
