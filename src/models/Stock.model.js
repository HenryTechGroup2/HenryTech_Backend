import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Stock = sequelize.define('stock', {
    stock_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    stock_amount: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0,
            max: 500
        }
    }
},
    {
        timestamps: false
    });

export default Stock;