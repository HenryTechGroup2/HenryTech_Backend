import Product from '../models/Product.model.js';
import { Op } from 'sequelize';
import Stock from '../models/Stock.model.js';
export const getProducts = async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) {
      const products = await Product.findAll({ include: Stock });
      return res.json(products);
    }
    const product = await Product.findAll({
      where: {
        product_name: {
          [Op.iLike]: `%${name}%`
        }
      }
    });
    return res.json(product);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findByPk(id, { include: Stock });
    return res.status(200).json(product);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
export const postProduct = async (req, res) => {
  const {
    product_name,
    product_description,
    product_price,
    product_ofer,
    product_rating,
    product_category,
    product_img,
    product_array_img,
    product_stock,
  } = req.body;
  try {
    const newStock = await Stock.create({ stock_amount: product_stock });
    const newProduct = await Product.create({
      product_name,
      product_description,
      product_price,
      product_ofer,
      product_rating,
      product_category,
      product_img,
      product_array_img,
      product_stock_id: newStock.stock_id
    });
    res.status(201).json({
      product: newProduct,
      complete: 'Product is created succesfully',
    });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
export const putProduct = async (req, res) => {
  const { id } = req.params;
  const {
    product_name,
    product_description,
    product_price,
    product_ofer,
    product_rating,
    product_category,
    product_img,
    product_array_img,
    product_stock,
  } = req.body;
  try {

    const productDB = await Product.findOne(
      { where: { product_id: id } }
    );
    const productDB_stock = await Stock.findOne(
      { where: { stock_id: productDB.product_stock_id } }
    );
    await productDB.update({
      product_name,
      product_description,
      product_price,
      product_ofer,
      product_rating,
      product_category,
      product_img,
      product_array_img,
    });
    await productDB_stock.update({ stock_amount: product_stock });
    res.status(201).json({ msg: 'The product was successfully updated' });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {

    const productDB = await Product.findOne({
      where: {
        product_id: id,
      }
    });
    await Stock.destroy({
      where: {
        stock_id: productDB.product_stock_id
      }
    });
    await productDB.destroy();
    res.status(200).json({ msg: 'The product was deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
