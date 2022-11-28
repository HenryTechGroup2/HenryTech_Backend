import app from './src/App.js';
import Order from './src/models/Order.model.js';
import Invoice from './src/models/Invoice.model.js';
import Product from './src/models/Product.model.js';
import User from './src/models/User.model.js';
import Review from './src/models/Review.model.js';
import Stock from './src/models/Stock.model.js';
import { Product_Order } from './src/models/Associations.model.js';
import sequelize from './src/db.js';
import {
  user as userInitialData,
  products as productInitialData,
  stock as stockInitialData,
  review as reviewInitialData,
  invoice as invoiceInitialData,
} from './data/data.js';

async function DB_StartingData() {
  const users = await User.findAll();
  if (users.length === 0) {
    let allUsers = await User.bulkCreate(userInitialData);
    console.log('initial users created successfully');
  }

  const allStock = await Stock.findAll();
  if (allStock.length === 0) {
    let allStocks = await Stock.bulkCreate(stockInitialData);
    console.log('initial stocks created successfully');
  }

  const allProduct = await Product.findAll();
  if (allProduct.length === 0) {
    let allProducts = await Product.bulkCreate(productInitialData);
    console.log('initial products created successfully');
  }

  const allReview = await Review.findAll();
  if (allReview.length === 0) {
    let allReviews = await Review.bulkCreate(reviewInitialData);
    console.log('initial reviews created successfully');
  }

  const allInvoice = await Invoice.findAll();
  if (allInvoice.length === 0) {
    let allInvoices = await Invoice.bulkCreate(invoiceInitialData);
    console.log('initial invoices created successfully');
  }
}

async function main() {
  try {
    await sequelize.sync({ force: true });
    app.listen(3001);
    console.log(`listening on port 3001`);
   
  } catch (e) {
    console.log('error', e);
  }
}

main();
 DB_StartingData();
