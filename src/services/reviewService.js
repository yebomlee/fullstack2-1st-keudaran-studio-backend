import { reviewDAO } from '../models';

const getReviews = async (id, sort, limit, offset) => {
  let reviews = [];

  if (sort === 'rating') {
    reviews = await reviewDAO.getReviewsByRating(id, limit, offset);
  } else {
    reviews = await reviewDAO.getReviews(id, limit, offset);
  }
  // errorGenerator('400', '서비스에러');
  console.log(reviews);
  return reviews;
};

export default { getReviews };
