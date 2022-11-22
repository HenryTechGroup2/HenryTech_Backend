import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const Product = sequelize.define('product', {
  product_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  product_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      notNull: true,
      min: 8,
      max: 50,
    },
  },
  product_description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notNull: true,
    },
  },
  product_price: {
    type: DataTypes.DECIMAL(9, 2),
    allowNull: false,
    validate: {
      min: 0,
      max: 9999999,
    },
  },
  product_ofer: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false,
    validate: {
      i,
    },
  },
  product_stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0,
    },
  },
  product_rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
    validate: {
      min: 1,
      max: 5,
    },
  },
  product_category: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_img: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  product_array_img: {
    type: DataTypes.ARRAY(DataTypes.TEXT),
  },
});

export default Product;
