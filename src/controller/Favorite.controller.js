import User from '../models/User.model.js';
import Product from '../models/Product.model.js';

export const addFavorite = async (req, res) => {
  const { user_id, product_id } = req.body;
  try {
    const userDB = await User.findByPk(user_id);
    const productDB = await Product.findByPk(product_id);
    userDB.addUser_favorite(productDB);
    res.status(200).json({
      msg: `The product ${productDB.product_name} was added to ${userDB.user_name}'s favorites successfully`,
    });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

export const removeFavorite = async (req, res) => {
  const { user_id, product_id } = req.params;

  try {
    const userDB = await User.findByPk(user_id);
    const productDB = await Product.findByPk(product_id);
    userDB.removeUser_favorite(productDB);
    res.status(200).json({
      msg: `The product ${productDB.product_name} was remove from ${userDB.user_name}'s favorites successfully`,
    });
  } catch (error) {
    res.status(500).json({ err: error });
  }
};
