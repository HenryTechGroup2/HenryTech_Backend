import Order from '../models/Order.model.js';
import Product from '../models/Product.model.js';
import Invoice from '../models/Invoice.model.js';
import User from '../models/User.model.js';
export const getOrderOfUser = async (req, res) => {
  const { id } = req.params;
  try {
    const orderId = await Order.findAll({
      where: {
        order_user_id: id,
      },
      include: [Invoice, { model: Product, attributes: ['product_id'] }],
    });
    return res.status(200).json(orderId);
  } catch (error) {
    return res.status(404).json({ msg: error });
  }
};
export const getAllOrders = async (req, res) => {
  try {
    const allOrders = await Order.findAll({
      include: [
        Invoice,
        User,
        { model: Product, attributes: ['product_name', 'product_price'] },
      ],
    });
    return res.status(200).json(allOrders);
  } catch (error) {
    return res.status(404).json({ msg: error });
  }
};

export const putOrder = async (req, res) => {
  const { id } = req.params;
  const { order_status } = req.body;
  try {
    await Order.update(
      {
        order_status,
      },
      {
        where: {
          order_id: id,
        },
      }
    );
    res
      .status(200)
      .json({ msg: 'Se actualizo el estado de la compra con exito' });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

export const postOrder = async (req, res) => {
  const { order_status, order_products, order_total, order_user_id } = req.body;
  console.log('hola');
  console.log(order_status, order_total, order_user_id);
  try {
    const newOrder = await Order.create({
      order_status,
      order_total,
      order_user_id,
    });
    console.log(newOrder);
    order_products.forEach(async (product) => {
      const productDB = await Product.findByPk(product.id);
      await newOrder.addProduct(productDB, {
        through: { product_order_amount: product.amount },
      });
    });

    res.status(200).json({
      order: newOrder,
      complete: 'Orden creada con exito',
    });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

export const deleteOrder = async (req, res) => {
  const { id } = req.params;
  try {
    await Order.destroy({
      where: {
        order_id: id,
      },
    });
    res.status(200).json({ msg: 'Orden eliminada con exito' });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};
