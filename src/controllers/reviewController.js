import { reviewService } from '../services';
import { asyncWrapper } from '../utils';

const getReviews = asyncWrapper(async (req, res) => {
  const { id, sort, offset, limit } = req.query;
  const reviews = await reviewService.getReviews(id, sort, offset, limit);
  res.status(200).json({ message: 'SUCCESS', result: reviews });
});

export default { getReviews };
