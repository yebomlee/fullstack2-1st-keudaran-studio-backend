import { reviewDAO } from '../models';

const getReviews = async (id, sort, offset, limit) => {
  let reviews = [];

  if (sort === 'rating') {
    reviews = await reviewDAO.getReviewsByRating(id, offset, limit);
  } else {
    reviews = await reviewDAO.getReviews(id, offset, limit);
  }
  return reviews;
};

export default { getReviews };
