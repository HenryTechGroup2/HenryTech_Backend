import Order from '../models/Order.model.js';

export const postOrder = async (req, res) => {
    const { order_status } = req.body;

    try {
        console.log(req.body)
        const newOrder = await Order.create({
            order_status
        });
        res.status(200).json({
            order: newOrder,
            complete: 'Order is created succesfully',
        });
    } catch (error) {
        return res.status(404).json({ msg: error });
    }
};