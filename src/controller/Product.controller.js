import { products } from '../../data/data.js';
import Product from '../models/Product.model.js';

export const getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      const products = await Product.findAll();
      return res.json(products);
    }
    const product = await Product.findByPk(id);
    return res.json(product);
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
    product_stock,
    product_rating,
    product_category,
    product_img,
    product_array_img,
  } = req.body;
  try {
    const allProduct = await Product.findAll();
    if (allProduct.length === 0) {
      let allProducts = await Product.bulkCreate(products);
      return res.json({
        msg: 'Products all created was as succesfully',
        productAll: allProducts,
      });
    }
    const newProduct = await Product.create({
      product_name,
      product_description,
      product_price,
      product_ofer,
      product_stock,
      product_rating,
      product_category,
      product_img,
      product_array_img,
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
  const { product_id } = req.params;
  const {
    product_name,
    product_description,
    product_price,
    product_ofer,
    product_stock,
    product_rating,
    product_category,
    product_img,
    product_array_img,
  } = req.body;
  try {
    await Product.update(
      {
        product_name,
        product_description,
        product_price,
        product_ofer,
        product_stock,
        product_rating,
        product_category,
        product_img,
        product_array_img,
      },
      {
        where: {
          product_id,
        },
      }
    );
    res.status(204).json({ msg: 'The product was successfully updated' });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
export const deleteProduct = async (req, res) => {
  const { product_id } = req.params;
  try {
    await Product.destroy({
      where: {
        product_id,
      },
    });
    res.status(204).json({ msg: 'The product was deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
