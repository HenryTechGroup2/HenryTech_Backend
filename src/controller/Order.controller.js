import Order from '../models/Order.model.js';

export const getAllOrder = async (req, res) => {
    try {
        const order = await Order.findAll();
        return res.status(200).json(order);
    } catch (error) {
        return res.status(404).json({ msg: error });
    };
};

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
    };
};