import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const Car = sequelize.define('car',{
  car_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

export default Car;
