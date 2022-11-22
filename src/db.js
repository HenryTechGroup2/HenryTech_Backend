import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import pg from 'pg';
import Invoice from './models/Invoice.mode.js';
import Car from './models/Car.model.js';
import Product from './models/Product.model.js';
dotenv.config();

const { PGDATABASE, PGHOST, PGPASSWORD, PGPORT, PGUSER } = process.env;

const sequelize = new Sequelize(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}:${PGPORT}/${PGDATABASE}`,
  {
    logging: false,
    native: false,
    dialectModule: pg,
  }
);
Car.hasMany(Product);
Product.belongsTo(Car);
Invoice.hasOne(Car);
Car.belongsTo(Invoice);

export default sequelize;
