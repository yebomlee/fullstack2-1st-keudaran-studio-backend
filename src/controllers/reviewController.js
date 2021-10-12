import { reviewService } from '../services';
import { asyncWrapper, errorGenerator } from '../utils';

const getReviews = asyncWrapper(async (req, res) => {
  const { id, sort, offset, limit } = req.query;
  if (!id) errorGenerator(400, 'NO_ID_WAS_FOUND');
  const reviews = await reviewService.getReviews(id, sort, offset, limit);
  res.status(200).json({ message: 'SUCCESS', result: reviews });
});

export default { getReviews };
