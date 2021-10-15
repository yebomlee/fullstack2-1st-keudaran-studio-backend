import prisma from '../../prisma';
import { Prisma } from '@prisma/client';

const getReviews = async (id, sort, offset, limit = 10) => {
  return await prisma.$queryRaw`
  SELECT    r.id,
            u.username,
            r.product_id,
            p.name,
            r.rating,
            r.content,
            r.created_at,
            r.updated_at,
            ri.image_url
  FROM      reviews r
  LEFT JOIN review_images ri 
  ON        r.id = ri.review_id
  LEFT JOIN users u
  ON        r.user_id = u.id
  LEFT JOIN products p
  ON        r.product_id = p.id
  WHERE     r.product_id=${id}
  ORDER BY  ${sort ? Prisma.sql`r.rating` : Prisma.sql`r.created_at`} DESC
  LIMIT     ${limit}
  ${offset ? Prisma.sql`OFFSET ${offset}` : Prisma.empty};
  `;
};

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
  SELECT    r.id,
            u.username,
            r.product_id,
            p.name,
            r.rating,
            r.content,
            r.created_at,
            r.updated_at,
            ri.image_url
  FROM      reviews r
  LEFT JOIN review_images ri 
  ON        r.id = ri.review_id
  LEFT JOIN users u
  ON        r.user_id = u.id
  LEFT JOIN products p
  ON        r.product_id = p.id
  WHERE     r.product_id=${productId}
  ORDER BY  r.created_at DESC
  LIMIT     1
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
  SELECT    r.id,
            r.user_id,
            r.product_id,
            r.rating,
            r.content,
            r.created_at,
            r.updated_at,
            ri.image_url
  FROM      reviews r
  LEFT JOIN review_images ri
  ON        r.id = ri.review_id
  ORDER BY  r.id DESC
  LIMIT     1; 
  `;
};

export default { getReviews, createReview, createReviewImg };
