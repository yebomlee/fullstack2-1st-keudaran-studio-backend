import { reviewDAO } from '../models';
import { errorGenerator } from '../utils';

const createReview = async newReview => {
  const { userId, productId, rating, content, imageUrl } = newReview;
  if (userId || productId || rating || content)
    errorGenerator(400, 'NOT_ENOGH_INFORMATION');

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
