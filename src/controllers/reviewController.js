import { reviewService } from '../services';
import { asyncWrapper } from '../utils';

const createReview = asyncWrapper(async (req, res) => {
  const newReview = req.body;
  const reviews = await reviewService.createReview(newReview);
  res.status(200).json({ message: 'SUCCESS', result: reviews });
});

export default { createReview };
