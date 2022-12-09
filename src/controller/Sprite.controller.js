import Stripe from 'stripe';
const stripe = new Stripe(
  'sk_test_51M77H2KiwPMfuM1Y8CEJUzIE5eoefq6EHn7NyiAcbHMcvlw7lW8jWWU8kJXhlY3CLt5shjoBJZ5Fc1WttpqFciv700FRQy0OTQ'
);
import Product from '../models/Product.model.js';
import Stock from '../models/Stock.model.js';
export const postStripe = async (req, res) => {
  const { id, amount } = req.body;

  const amountTotal = amount.reduce(
    (a, b) => a + b.product_price * b.product_count,
    0
  );

  try {
    const payment = await stripe.paymentIntents.create({
      amount: parseInt(amountTotal),
      currency: 'ARS',
      description: 'Compra realizada en Henry Tech',
      payment_method: id,
      confirm: true,
    });

    amount.forEach(async (product) => {
      const productDB = await Product.findByPk(product.product_id, {
        include: Stock,
      });

      await Stock.update(
        { stock_amount: productDB.stock.stock_amount - product.product_count },
        {
          where: {
            stock_id: productDB.stock.stock_id,
          },
        }
      );
    });

    res.json({ message: 'Succesfull payment', payment });
  } catch (error) {
    res.json({ message: error.raw.message });
  }
};
