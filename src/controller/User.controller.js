import Product from '../models/Product.model.js';
import User from '../models/User.model.js';
import bcrypt from 'bcryptjs';
import Stock from '../models/Stock.model.js';
//Faltaria implementacion de JSON WEB TOKENS PARA CONTROLAR EL TIEMPO DE SESION
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
      include: [
        {
          model: Product,
          as: 'user_favorites',
          include: Stock,
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
      ],
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
  //Encriptamos la contraseña es una funcion asincrona el 10 significa que tan segura sera entre mas grande el numero mas segura pero tardara mas tiempo
  const password = await bcrypt.hash(user_password, 10);
  try {
    const newUser = await User.create({
      user_email,
      user_name,
      user_password: password,
      user_phone,
      user_payment_method,
      user_shipping_address,
      user_isAdmin,
    });
    res.status(200).json({
      user: newUser,
      complete: 'User is created succesfully',
      password,
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
let x = 0;
export const loginUserAuth0 = async (req, res) => {
  const { user_email, user_name } = req.body;

  try {
    const userExist = await User.findOne({
      where: { user_email },
      include: { model: Product, as: 'user_favorites' },
    });

    if (userExist) {
      return res.status(201).json(userExist);
    }
    const user = await User.create({
      user_email,
      user_name,
      user_isAdmin: false,
      user_password: 'Auth0AutenticatePassword',
    });
    res.json(user);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { user_email, user_password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        user_email,
      },
      include: [
        {
          model: Product,
          as: 'user_favorites',
          include: Stock,
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
      ],
    });
    if (!user) throw new Error('Usuario o contraseña incorrecta');
    //Comparamos las contraseñas deshasheandolas
    if (await bcrypt.compare(user_password, user.user_password)) {
      return res.json({ user });
    }
    throw new Error('Usuario o contraseña incorrecta');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
