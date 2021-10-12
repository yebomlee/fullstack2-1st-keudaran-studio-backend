import { reviewDAO } from '../models';

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

  return createdReview;
};

export default { createReview };
