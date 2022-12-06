import Stock from '../models/Stock.model.js';

export const getAllStock = async (req, res) => {
  try {
    const stock = await Stock.findAll();
    return res.status(200).json(stock);
  } catch (error) {
    return res.status(404).json({ msg: error });
  }
};

export const getStock = async (req, res) => {
  const { id } = req.params;
  try {
    const stockId = await Stock.findByPk(id);
    return res.status(200).json(stockId);
  } catch (error) {
    return res.status(404).json({ msg: error });
  }
};

export const putStock = async (req, res) => {
  const { id } = req.params;
  const { stock_amount } = req.body;
  try {
    await Stock.update(
      {
        stock_amount,
      },
      {
        where: {
          stock_id: Number(id),
        },
      }
    );
    res.status(200).json({ msg: 'The stock was successfully updated' });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};

export const postStock = async (req, res) => {
  const { stock_amount } = req.body;

  try {
    const newStock = await Stock.create({
      stock_amount,
    });
    res.status(200).json({
      stock: newStock,
      complete: 'Updated stock',
    });
  } catch (error) {
    return res.status(404).json({ msg: error });
  }
};

export const deleteStock = async (req, res) => {
  const { id } = req.params;
  try {
    await Stock.destroy({
      where: {
        stock_id: id,
      },
    });
    res.status(200).json({ msg: 'Stock removed successfully' });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};
