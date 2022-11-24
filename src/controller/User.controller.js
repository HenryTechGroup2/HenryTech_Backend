import { user } from '../../data/data.js';
import User from '../models/User.model.js';

export const getAllUsers = async (req, res) => {
    try {
        const user = await User.findAll();
        return res.json(user);
    } catch (error) {
        return res.status(404).json({ msg: error });
    };
};

export const getUser = async (req, res) => {
    const { id } = req.params;
    try {
        const userId = await User.findByPk(id);
        return res.status(200).json(userId);
    } catch (error) {
        return res.status(404).json({ msg: error });
    };
};

export const putUser = async (req, res) => {
    const { user_id } = req.params;
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
                    user_id,
                },
            }
        );
        res.status(200).json({ msg: 'The user was successfully updated' });
    } catch (error) {
        res.status(404).json({ msg: error });
    };
};

export const postUser = async (req, res) => {
    const {
        user_email,
        user_name,
        user_password,
        user_phone,
        user_payment_method,
        user_shipping_address,
        user_isAdmin
    } = req.body;
    const users = await User.findAll();
    if (users.length === 0) {
      let allUsers = await User.bulkCreate(user);
      return res.status(200).json({
        msg: 'User was created as succesfully',
        usersAll: allUsers,
      });
    }
    try {
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

export const deleteUser = async (req, res) => {
    const { user_id } = req.params;
    try {
        await User.destroy({
            where: {
                user_id,
            },
        });
        res.status(200).json({ msg: 'The user was deleted successfully' });
    } catch (error) {
        res.status(404).json({ msg: error });
    };
};