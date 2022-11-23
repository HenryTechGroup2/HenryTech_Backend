import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const Order = sequelize.define('order', {
  order_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  order_status: {
    type: DataTypes.ENUM('Pending', 'Paid', 'In Shipping', 'Completed'),
    allowNull: false
  }
},
  {
    timestamps: false,
  });

export default Order;
