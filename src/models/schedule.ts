/* eslint-disable camelcase */
import { Model, DataTypes } from 'sequelize';
import { db } from '../db';

enum Shift {
  day = 'DAY shift',
  night = 'NIGHT shift'
}

interface ISchedule {
  id: number
  monday: Shift | null
  tuesday: Shift | null
  wednesday: Shift | null
  thursday: Shift | null
  friday: Shift | null
  saturday: Shift | null
  sunday: Shift | null
}

export default class Schedule extends Model implements ISchedule {
  public id!: number;

  public monday!: Shift | null;

  public thursday!: Shift | null;

  public wednesday!: Shift | null;

  public tuesday!: Shift | null;

  public friday!: Shift | null;

  public saturday!: Shift | null;

  public sunday!: Shift | null;
}

Schedule.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  monday: {
    type: DataTypes.STRING,
    defaultValue: null,
    allowNull: true,
  },
  wednesday: {
    type: DataTypes.STRING,
    defaultValue: null,
    allowNull: true,
  },
  tuesday: {
    type: DataTypes.STRING,
    defaultValue: null,
    allowNull: true,
  },
  friday: {
    type: DataTypes.STRING,
    defaultValue: null,
    allowNull: true,
  },
  saturday: {
    type: DataTypes.STRING,
    defaultValue: null,
    allowNull: true,
  },
  sunday: {
    type: DataTypes.STRING,
    defaultValue: null,
    allowNull: true,
  },
}, {
  sequelize: db,
  tableName: 'schedules',
  timestamps: false,
});
