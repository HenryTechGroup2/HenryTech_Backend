export const validateProductDates = (req, res, next) => {
  const {
    product_name,
    product_description,
    product_price,
    product_stock,
    product_rating,
    product_category,
    product_img,
  } = req.body;

  if (
    !product_name ||
    !product_price ||
    !product_stock ||
    !product_rating ||
    !product_img ||
    !product_category ||
    product_description.length > 10
  ) {
    return res.status(400).json({ msg: 'Please complete all fields' });
  }
  next();
};
