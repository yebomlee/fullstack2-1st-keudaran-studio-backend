import prisma from '../../prisma';

const createReview = async (userId, productId, rating, content) => {
  console.log(userId, productId, rating, content);
  return await prisma.$queryRaw`
  INSERT INTO reviews
  VALUES (default, ${userId}, ${productId}, ${rating}, ${content}, default, default);
  `;
};

const createReviewImg = async (imgUrl, reviewId) => {
  return await prisma.$queryRaw`
  INSERT INTO review_images
  VALUES (default, ${imgUrl}, ${reviewId});
  `;
};

export default { createReview, createReviewImg };
