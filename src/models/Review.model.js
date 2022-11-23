import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

const Review = sequelize.define('review', {
    review_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    review_title: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            min: 2,
            max: 20
        }
    },
    review_body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
            min: 50,
            max: 200
        }
    },
    review_score: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0,
            max: 5
        }
    }
},
    {
        timestamps: false,
    });

export default Review;