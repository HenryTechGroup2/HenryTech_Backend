import { DataTypes } from 'sequelize';
import sequelize from '../db.js';

export const MsgPost = sequelize.define(
  'msgpost',
  {
    msgpost_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    msgpost_post: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  }
);
export const MsgReceived = sequelize.define(
  'msgreceived',
  {
    msgreceived_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    msgreceived_post: {
      type: DataTypes.TEXT,
    },
  },
  {
    timestamps: false,
  }
);
