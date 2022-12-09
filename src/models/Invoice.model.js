import sequelize from '../db.js';
import { DataTypes } from 'sequelize';

const Invoice = sequelize.define('invoice', {
  invoice_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  invoice_detail: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  invoice_shipping: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  invoice_total: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

},
  {
    timestamps: false,
  });

export default Invoice;
