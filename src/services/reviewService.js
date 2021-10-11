import { reviewDAO } from '../models';

const getReviews = async (id, sort, ea) => {
  let reviews = [];

  if (sort === 'rating') {
    reviews = reviewDAO.getReviewsByRating(id, ea);
  } else {
    reviews = reviewDAO.getReviews(id, ea);
  }

  return reviews;
};

export default { getReviews };
