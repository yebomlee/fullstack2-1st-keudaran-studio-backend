import { reviewService } from '../services';
import { asyncWrapper, errorGenerator } from '../utils';

const getReviews = asyncWrapper(async (req, res) => {
  const { id, sort, offset, limit } = req.query;
  if (!id) errorGenerator(400, 'NO_ID_WAS_FOUND');

  const reviews = await reviewService.getReviews(id, sort, offset, limit);
  res.status(200).json({ message: 'SUCCESS', result: reviews });
});

const createReview = asyncWrapper(async (req, res) => {
  const newReview = req.body;

  const { userId, productId, rating, content } = newReview;
  if (!userId || !productId || !rating || !content)
    errorGenerator(400, 'NOT_ENOGH_INFORMATION');

  const reviews = await reviewService.createReview(newReview);
  res.status(200).json({ message: 'SUCCESS', result: reviews });
});

export default { getReviews, createReview };
