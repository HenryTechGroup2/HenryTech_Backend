import Invoice from "../models/Invoice.model.js";

export const getInvoice = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      const invoices = await Invoice.findAll();
      return res.json(invoices);
    }
    const invoice = await Invoice.findByPk(id);
    return res.json(invoice);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

export const postInvoice = async (req, res) => {
  const { invoice_total, invoice_shipping, invoice_amount } = req.body;
  try {
    const newInvoice = await Invoice.create({
      invoice_total,
      invoice_shipping,
      invoice_amount,
    });
    res.status(201).json({
      invoice: newInvoice,
      complete: "Invoice is created succesfully",
    });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
