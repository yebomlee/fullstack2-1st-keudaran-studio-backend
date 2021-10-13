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
const createReview = async newReview => {
  const { userId, productId, rating, content, imageUrl } = newReview;

  let [createdReview] = await reviewDAO.createReview(
    userId,
    productId,
    rating,
    content
  );

  if (imageUrl)
    [createdReview] = await reviewDAO.createReviewImg(
      imageUrl,
      createdReview.id
    );
  console.log('wow');
  return createdReview;
};

export default { createReview };
