import Order from '../models/Order.model.js';

export const getAllOrder = async (req, res) => {
    try {
        const order = await Order.findAll();
        return res.status(200).json(order);
    } catch (error) {
        return res.status(404).json({ msg: error });
    };
};

export const putOrder = async (req, res) => {
    const { id } = req.params;
    const {
        user_email,
        user_name,
        user_password,
        user_phone,
        user_payment_method,
        user_shipping_address,
        user_isAdmin
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
                user_isAdmin
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
    };
};

export const postOrder = async (req, res) => {
    const {
        user_email,
        user_name,
        user_password,
        user_phone,
        user_payment_method,
        user_shipping_address,
        user_isAdmin
    } = req.body;

    try {
        console.log(req.body)
        const newUser = await User.create({
            user_email,
            user_name,
            user_password,
            user_phone,
            user_payment_method,
            user_shipping_address,
            user_isAdmin
        });
        res.status(200).json({
            user: newUser,
            complete: 'User is created succesfully',
        });
    } catch (error) {
        return res.status(404).json({ msg: error });
    }
};

export const deleteOrder = async (req, res) => {
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
    };
};