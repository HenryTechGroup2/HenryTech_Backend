import sequelize from '../db.js';
import { DataType, DataTypes } from 'sequelize';

const Product = sequelize.define('product', {
  product_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
});

export default Product;
