import Stripe from 'stripe';
const stripe = new Stripe(
  'sk_test_51M77H2KiwPMfuM1Y8CEJUzIE5eoefq6EHn7NyiAcbHMcvlw7lW8jWWU8kJXhlY3CLt5shjoBJZ5Fc1WttpqFciv700FRQy0OTQ'
);
import Product from '../models/Product.model.js';
import Stock from '../models/Stock.model.js';
import Invoice from '../models/Invoice.model.js';
import axios from 'axios';

export const postStripe = async (req, res) => {
  const { id, amount, userid } = req.body;

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
    console.log(payment);
    const order_products = [];
    let invoice_detail = '';
    await amount.forEach(async (product) => {
      order_products.push({
        id: product.product_id,
        amount: product.product_count,
      });
      invoice_detail = invoice_detail.concat(
        `${product.product_count}  ${product.product_name} ${product.product_price} -`
      );
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
    const newOrder = await axios.post('http://localhost:3001/api/order', {
      order_status: 'Pagado',
      order_products: order_products,
      order_total: amountTotal,
      order_user_id: userid,
    });
    const newInvoice = await axios.post('http://localhost:3001/api/invoice', {
      invoice_total: amountTotal,
      invoice_shipping: 'Cerro la colina 22',
      invoice_detail,
      invoice_user_id: userid,
      invoice_order_id: newOrder.data.order.order_id,
    });
    console.log(newOrder, newInvoice, payment);
    res.json({ message: 'Succesfull payment', payment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
