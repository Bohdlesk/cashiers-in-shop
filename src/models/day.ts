/* eslint-disable camelcase */
import {
  Model, DataTypes, HasMany,
} from 'sequelize';
import { db } from '../db';
import Schedule from './schedule';

export enum Days {
  monday= 'MONDAY',
  tuesday = 'TUESDAY',
  wednesday = 'WEDNESDAY',
  thursday = 'THURSDAY',
  friday = 'FRIDAY',
  saturday = 'SATURDAY',
  sunday = 'SUNDAY',
}

export interface IDay {
  day: Days
}

export default class Day extends Model implements IDay {
  public day!: Days;

  static Schedule: HasMany<Day, Schedule>;
}

Day.init({
  day: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'days',
  timestamps: false,
  underscored: true,
});

Day.Schedule = Day.hasMany(Schedule, { foreignKey: 'day' });
