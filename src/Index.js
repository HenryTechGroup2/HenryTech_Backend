import app from './App.js';
import Car from './controller/Car.controller.js';
import Invoice from './controller/Invoice.controller.js';
import sequelize from './db.js';
import Product from './models/Product.model.js';

const port = 3001;
Invoice;
async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(port);
    console.log(`listening on port ${port}`);
  } catch (e) {
    console.log('error', e);
  }
}

main();
