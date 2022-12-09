import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const User = sequelize.define(
  'user',
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_suspense: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_phone: {
      type: DataTypes.BIGINT,
    },
    user_payment_method: {
      type: DataTypes.ENUM('stripe'),
    },
    user_shipping_address: {
      type: DataTypes.STRING,
    },
    user_isAdmin: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    timestamps: false,
  }
);

export default User;
