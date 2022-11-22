import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import pg from 'pg';
import Invoice from './controller/Invoice.controller';
import Car from './controller/Car.controller';
import Product from './models/Product.model';
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

User.hasOne(Car);
Car.belongsTo(User);

User.belongsToMany(Product, { through: "Products_User" });
Product.belongsToMany(User, { through: "Products_User" });

User.hasMany(Invoice);
Invoice.belongsTo(User);

User.hasMany(Review);
Review.belongsTo(User);

Product.hasMany(Review);
Review.belongsTo(Product);

Car.hasMany(Product);
Product.belongsTo(Car);

Invoice.hasOne(Car);
Car.belongsTo(Invoice);

export default sequelize;
