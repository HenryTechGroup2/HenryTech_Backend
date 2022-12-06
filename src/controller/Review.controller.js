import Review from '../models/Review.model.js';

export const getAllReview = async (req, res) => {
  try {
    const review = await Review.findAll();
    return res.status(200).json(review);
  } catch (error) {
    return res.status(404).json({ msg: error });
  }
};

export const getReview = async (req, res) => {
  const { id } = req.params;
  try {
    const reviewId = await Review.findByPk(id);
    return res.status(200).json(reviewId);
  } catch (error) {
    return res.status(404).json({ msg: error });
  }
};

export const postReview = async (req, res) => {
  const { review_title, review_body, review_score } = req.body;

  try {
    const newReview = await Review.create({
      review_title,
      review_body,
      review_score,
    });
    res.status(200).json({
      review: newReview,
      complete: 'Review is created succesfully',
    });
  } catch (error) {
    return res.status(404).json({ msg: error });
  }
};

export const deleteReview = async (req, res) => {
  const { id } = req.params;
  try {
    await Review.destroy({
      where: {
        review_id: id,
      },
    });
    res.status(200).json({ msg: 'The review was deleted successfully' });
  } catch (error) {
    res.status(404).json({ msg: error });
  }
};
