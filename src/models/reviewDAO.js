import prisma from '../../prisma';

const createReview = async (userId, productId, rating, content) => {
  await prisma.$queryRaw`
  INSERT INTO reviews VALUES
  (
              DEFAULT,
              ${userId},
              ${productId},
              ${rating},
              ${content},
              DEFAULT,
              DEFAULT
  );
    `;

  return await prisma.$queryRaw`
  SELECT 
    id,
    user_id,
    product_id,
    rating,
    content,
    created_at,
    updated_at
  FROM   reviews
  ORDER  BY id DESC
  LIMIT  1;  
    `;
};

const createReviewImg = async (imgUrl, reviewId) => {
  await prisma.$queryRaw`
  INSERT INTO review_images VALUES
  (
              DEFAULT,
              ${reviewId},
              ${imgUrl}
  );
  `;

  return await prisma.$queryRaw`
  SELECT 
  FROM   reviews
         LEFT JOIN review_images
                ON reviews.id = review_images.review_id
  ORDER  BY reviews.id DESC
  LIMIT  1; 
  `;
};

export default { createReview, createReviewImg };
