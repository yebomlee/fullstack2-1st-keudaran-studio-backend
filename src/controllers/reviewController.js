import { reviewService } from '../services';

const getReviews = async (req, res) => {
  const { id, sort, ea } = req.query;
  const reviews = await reviewService.getReviews(id, sort, ea);

  res.status(200).json({ message: 'SUCCESS', result: reviews });
};

export default { getReviews };
