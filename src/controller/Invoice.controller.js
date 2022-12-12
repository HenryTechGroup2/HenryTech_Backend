import Invoice from "../models/Invoice.model.js";

export const getAllInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.findAll();
    return res.status(200).json(invoice);
  } catch (error) {
    return res.status(404).json({ msg: error });
  };
};

export const getInvoice = async (req, res) => {
  const { id } = req.params;
  try {
    const invoice = await Invoice.findAll({
      where: {
        invoice_user_id: id
      }
    });
    return res.json(invoice);
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};

export const postInvoice = async (req, res) => {
  const { invoice_total, invoice_shipping, invoice_detail, invoice_user_id, invoice_order_id } = req.body;
  try {
    const newInvoice = await Invoice.create({
      invoice_total,
      invoice_shipping,
      invoice_detail,
      invoice_user_id,
      invoice_order_id
    });

    res.status(201).json({
      invoice: newInvoice,
      complete: "Invoice is created succesfully",
    });
  } catch (error) {
    return res.status(500).json({ msg: error });
  }
};
