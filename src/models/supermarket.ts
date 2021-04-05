/* eslint-disable camelcase */
import { Model, DataTypes, HasMany } from 'sequelize';
import { db } from '../db';
import Cashier from './cashier';

interface ISupermarket {
  id?: number
  address: string
  city: string
}

export default class Supermarket extends Model implements ISupermarket {
  public id!: number;

  public address!: string;

  public city!: string;

  static Cashier: HasMany<Supermarket, Cashier>;
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
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: db,
  tableName: 'supermarkets',
  timestamps: false,
  underscored: true,
});

Supermarket.Cashier = Supermarket.hasMany(Cashier, { foreignKey: 'supermarket_id' });
