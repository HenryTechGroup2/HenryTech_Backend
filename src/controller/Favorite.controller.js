import User from '../models/User.model.js';
import Product from '../models/Product.model.js';

export const newFavorite = async (req, res) => {
  const { user_id, product_id } = req.body;
  try {
    const userDB = await User.findByPk(user_id);
    const productDB = await Product.findByPk(product_id);
    userDB.addUser_favorite(productDB);
    res.status(200).json({ msg: 'The product was added to favorites successfully' });
  } catch (error) {
    console.log(error);
    res.status(404).json({ msg: error });
  }
};
