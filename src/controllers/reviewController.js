import { reviewService } from '../services';
import { asyncWrapper, errorGenerator } from '../utils';

const createReview = asyncWrapper(async (req, res) => {
  const newReview = req.body;

  const { userId, productId, rating, content } = newReview;
  if (!userId || !productId || !rating || !content)
    errorGenerator(400, 'NOT_ENOGH_INFORMATION');

  const reviews = await reviewService.createReview(newReview);
  res.status(200).json({ message: 'SUCCESS', result: reviews });
});

export default { createReview };
