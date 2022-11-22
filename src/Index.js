import app from './App.js';
import sequelize from './db.js';
import Product from './models/Product.model.js';
const port = 3001;

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
