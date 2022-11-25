import app from './App.js';
import Order from './models/Order.model.js';
import Invoice from './models/Invoice.model.js';
import Product from './models/Product.model.js';
import User from './models/User.model.js';
import Review from './models/Review.model.js';
import Stock from "./models/Stock.model.js"
import { Product_Order } from './models/Associations.model.js';
import sequelize from './db.js';
import { user as userInitialData, products as productInitialData } from '../data/data.js';

const port = 3001;

async function DB_StartingData() {
  const users = await User.findAll();
  if (users.length === 0) {
    let allUsers = await User.bulkCreate(userInitialData);
    console.log("initial users created successfully");
  }

  const allProduct = await Product.findAll();
  if (allProduct.length === 0) {
    let allProducts = await Product.bulkCreate(productInitialData);
    console.log("initial products created successfully");
  }
}

async function main() {
  try {
    await sequelize.sync({ force: true });
    app.listen(port);
    console.log(`listening on port ${port}`);
    DB_StartingData();
  } catch (e) {
    console.log('error', e);
  }
}

main();
