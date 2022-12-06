import Order from '../models/Order.model.js';

export const getOrder = async (req, res) => {
  const { id } = req.params;
  try {
    const orderId = await Order.findByPk(id);
    return res.status(200).json(orderId);
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
          order_id: Number(id),
        },
      }
    );
    res.status(200).json({ msg: 'The order was successfully updated' });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

export const postOrder = async (req, res) => {
  const { order_status } = req.body;

  try {
    const newOrder = await Order.create({
      order_status,
    });
    res.status(200).json({
      order: newOrder,
      complete: 'Order is created succesfully',
    });
  } catch (error) {
    return res.status(404).json({ msg: error });
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
    res.status(200).json({ msg: 'The order was deleted successfully' });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};
