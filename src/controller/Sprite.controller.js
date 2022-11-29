import Stripe from 'stripe';
const stripe = new Stripe(
    'sk_test_51M77H2KiwPMfuM1Y8CEJUzIE5eoefq6EHn7NyiAcbHMcvlw7lW8jWWU8kJXhlY3CLt5shjoBJZ5Fc1WttpqFciv700FRQy0OTQ'
);
export const postStripe = async (req, res) => {
    const { id, amount } = req.body;
    const amountTotal = amount.reduce((a, b) => a + (b.product_price * b.product_count), 0);
    try {
      const payment = await stripe.paymentIntents.create({
        amount: amountTotal,
        currency: 'ARS',
        description: 'Gaming Keyboard',
        payment_method: id,
        confirm: true,
      });
      res.json({ message: 'Succesfull paymentd' });
    } catch (error) {
      res.json({ message: error.raw.message });
    }
};