/* eslint-disable camelcase */
import {
  Model, DataTypes, HasMany,
} from 'sequelize';
import { db } from '../db';
import Schedule from './schedule';

export enum Shifts {
  day = 'DAY',
  night = 'NIGHT'
}

export interface IShift {
  shift: Shifts
}

export default class Shift extends Model implements IShift {
  public shift!: Shifts;

  static Schedule: HasMany<Shift, Schedule>;
}

Shift.init({
  shift: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true,
  },
}, {
  sequelize: db,
  tableName: 'shifts',
  timestamps: false,
  underscored: true,
});

Shift.Schedule = Shift.hasMany(Schedule, { foreignKey: 'shift' });
