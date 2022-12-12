import { DataTypes } from 'sequelize';
import sequelize from '../db.js';
import Product from './Product.model.js';
import Order from './Order.model.js';
import User from './User.model.js';
import Invoice from './Invoice.model.js';
import Stock from './Stock.model.js';
import Review from './Review.model.js';
import { MsgPost, MsgReceived } from './Message.model.js';

export const Product_Order = sequelize.define(
  'product_order',
  {
    product_order_amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        min: 1,
        max: 10,
      },
    },
  },
  {
    timestamps: false,
  }
);

export const Product_User = sequelize.define(
  'favorite',
  {},
  { timestamps: false }
);

Stock.hasOne(Product, {
  targetKey: 'product_id',
  foreignKey: 'product_stock_id',
});
Product.belongsTo(Stock, {
  sourceKey: 'product_id',
  foreignKey: 'product_stock_id',
});

Product.belongsToMany(Order, {
  through: Product_Order,
  foreignKey: 'product_order_productID',
});
Order.belongsToMany(Product, {
  through: Product_Order,
  foreignKey: 'product_order_orderID',
});

Product.hasMany(Review, { foreignKey: 'review_product_id' });
Review.belongsTo(Product, { foreignKey: 'review_product_id' });

Product.belongsToMany(User, {
  through: Product_User,
  foreignKey: 'favorite_product_id',
  as: 'user_favorites',
});
User.belongsToMany(Product, {
  through: Product_User,
  foreignKey: 'favorite_user_id',
  as: 'user_favorites',
});

User.hasMany(Review, { foreignKey: 'review_user_id' });
Review.belongsTo(User, { foreignKey: 'review_user_id' });

User.hasMany(Order, { foreignKey: 'order_user_id' });
Order.belongsTo(User, { foreignKey: 'order_user_id' });

User.hasMany(Invoice, { foreignKey: 'invoice_user_id' });
Invoice.belongsTo(User, { foreignKey: 'invoice_user_id' });

Order.hasOne(Invoice, { foreignKey: 'invoice_order_id' });
Invoice.belongsTo(Order, { foreignKey: 'invoice_order_id' });

MsgPost.hasMany(MsgReceived);
MsgReceived.belongsTo(MsgPost);
User.hasMany(MsgPost);
MsgPost.belongsTo(User);
User.hasMany(MsgReceived);
MsgReceived.belongsTo(User);
