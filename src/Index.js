import app from './App.js';
import Car from './models/Car.model.js';
import Invoice from './models/Invoice.mode.js';
import Product from './models/Product.model.js';
import User from './models/User.model.js';
import Review from './models/Review.model.js';
import sequelize from './db.js';


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

User.hasOne(Car);
Car.belongsTo(User);

User.belongsToMany(Product, { through: "products_user" });
Product.belongsToMany(User, { through: "products_user" });

User.hasMany(Invoice);
Invoice.belongsTo(User);

User.hasMany(Review);
Review.belongsTo(User);

Product.hasMany(Review);
Review.belongsTo(Product);

Car.hasMany(Product);
Product.belongsTo(Car);

Invoice.hasOne(Car);
Car.belongsTo(Invoice);
