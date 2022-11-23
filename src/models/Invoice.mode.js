import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const Invoice = sequelize.define('invoice', {
  invoice_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  invoice_amount: {
    type: DataTypes.DECIMAL(12, 2),
    allowNull: false,
  },
  invoice_shipping: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default Invoice;
