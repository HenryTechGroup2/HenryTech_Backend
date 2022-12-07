import app from './src/App.js';
import Order from './src/models/Order.model.js';
import Invoice from './src/models/Invoice.model.js';
import Product from './src/models/Product.model.js';
import User from './src/models/User.model.js';
import Review from './src/models/Review.model.js';
import Stock from './src/models/Stock.model.js';
import { Product_Order } from './src/models/Associations.model.js';
import sequelize from './src/db.js';
import { Server } from 'socket.io';
import {
  user as userInitialData,
  products as productInitialData,
  review as reviewInitialData,
  invoice as invoiceInitialData,
  user,
} from './data/data.js';
import { server, socketEvents } from './src/socket/Socket.js';
import axios from 'axios';

const port = 3001;

async function DB_StartingData() {
  try {
    const users = await User.findAll();
    if (users.length === 0) {
      userInitialData.forEach(async (user) => {
        await axios.post('http://localhost:3001/api/user/', user);
      });
      console.log('initial users created successfully');
    }

    const allProduct = await Product.findAll();
    if (allProduct.length === 0) {
      productInitialData.forEach(async (product) => {
        await axios.post('http://localhost:3001/api/product/', product);
      });
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
  } catch (error) {
    console.log(error.message);
  }
}

async function main() {
  try {
    await sequelize.sync({ force: true });
    server.listen(port);
    console.log(`listening on port ${port}`);
    await DB_StartingData();
    socketEvents();
  } catch (e) {
    console.log('error', e);
  }
}

main();
