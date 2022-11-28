import Product from '../models/Product.model.js';
import User from '../models/User.model.js';
export const getAllUsers = async (req, res) => {
  try {
    const user = await User.findAll({
      include: {
        model: Product,
        as: 'user_favorites',
        attributes: [
          'product_id',
          'product_name',
          'product_description',
          'product_price',
          'product_rating',
          'product_img',
          'product_stock_id',
        ],
      },
    });
    return res.json(user);
  } catch (error) {
    return res.status(404).json({ msg: error });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const userId = await User.findByPk(id, {
      include: {
        model: Product,
        as: 'user_favorites',
        attributes: [
          'product_id',
          'product_name',
          'product_description',
          'product_price',
          'product_rating',
          'product_img',
          'product_stock_id',
        ],
      },
    });
    return res.status(200).json(userId);
  } catch (error) {
    return res.status(404).json({ msg: error });
  }
};

export const putUser = async (req, res) => {
  const { id } = req.params;
  const {
    user_email,
    user_name,
    user_password,
    user_phone,
    user_payment_method,
    user_shipping_address,
    user_isAdmin,
  } = req.body;
  try {
    await User.update(
      {
        user_email,
        user_name,
        user_password,
        user_phone,
        user_payment_method,
        user_shipping_address,
        user_isAdmin,
      },
      {
        where: {
          user_id: Number(id),
        },
      }
    );
    res.status(200).json({ msg: 'The user was successfully updated' });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

export const postUser = async (req, res) => {
  const {
    user_email,
    user_name,
    user_password,
    user_phone,
    user_payment_method,
    user_shipping_address,
    user_isAdmin,
  } = req.body;

  try {
    console.log(req.body);
    const newUser = await User.create({
      user_email,
      user_name,
      user_password,
      user_phone,
      user_payment_method,
      user_shipping_address,
      user_isAdmin,
    });
    res.status(200).json({
      user: newUser,
      complete: 'User is created succesfully',
    });
  } catch (error) {
    return res.status(404).json({ msg: error });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    await User.destroy({
      where: {
        user_id: id,
      },
    });
    res.status(200).json({ msg: 'The user was deleted successfully' });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

export const loginUser = async (req, res) => {
  const { user_email, user_password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        user_email,
      },
    });
    if (!user) throw new Error('User or password incorrect');
    if (user.user_password === user_password) {
      return res.json({ user });
    }
    throw new Error('User or password incorrect');
  } catch (error) {
    res.json(500).status({ message: error.message });
  }
};
