import app from './App.js';
import Order from './models/Order.model.js';
import Invoice from './models/Invoice.model.js';
import Product from './models/Product.model.js';
import User from './models/User.model.js';
import Review from './models/Review.model.js';
import Stock from "./models/Stock.model.js"
import {Product_Order} from './models/Associations.model.js';
import sequelize from './db.js';


const port = 3001;

async function main() {
  try {
    await sequelize.sync({ force: true });
    app.listen(port);
    console.log(`listening on port ${port}`);
  } catch (e) {
    console.log('error', e);
  }
}

main();
