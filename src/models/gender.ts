/* eslint-disable camelcase */
import {
  Model, DataTypes, HasMany,
} from 'sequelize';
import { db } from '../db';
import Cashier from './cashier';

export enum Sex {
  male = 'MALE',
  female = 'FEMALE'
}

export interface IGender {
  sex: Sex
}

export default class Gender extends Model implements IGender {
  public sex!: Sex;

  static Cashier: HasMany<Gender, Cashier>;
}

Gender.init({
  sex: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'genders',
  timestamps: false,
  underscored: true,
});

Gender.Cashier = Gender.hasMany(Cashier, { foreignKey: 'sex' });
