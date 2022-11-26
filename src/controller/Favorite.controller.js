import User from '../models/User.model.js';
import Product from '../models/Product.model.js';

export const newFavorite = async (req, res) => {
    const { idUser, idProduct } = req.params;
    try {
        const userDB = await User.findByPk(idUser);
        const productDB = await Product.findByPk(idProduct);
        userDB.addUser_favorite(productDB);
        res.status(200).json({ msg: "User is created favorite succesfully" })
    } catch (error) {
        res.status(404).json({ msg: error });
    }
}