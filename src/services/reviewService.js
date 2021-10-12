import { reviewDAO } from '../models';

const getReviews = async (id, sort, offset, limit) => {
  let reviews = [];

  reviews =
    sort === 'rating'
      ? await reviewDAO.getReviewsByRating(id, offset, limit)
      : await reviewDAO.getReviews(id, offset, limit);

  return reviews;
};

export default { getReviews };
