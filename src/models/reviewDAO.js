import prisma from '../../prisma';
import { Prisma } from '@prisma/client';

const getReviewsByRating = async (id, offset, limit) => {
  let reviews = [];

  return (reviews = await prisma.$queryRaw`
  SELECT reviews.id, users.username, reviews.product_id, products.id, products.name,
  reviews.rating, reviews.content, reviews.created_at, reviews.updated_at, review_images.image_url
  FROM reviews
  LEFT JOIN review_images ON reviews.id = review_images.review_id
  LEFT JOIN users ON reviews.user_id = users.id
  LEFT JOIN products ON reviews.product_id = products.id
  WHERE reviews.product_id=3
  ORDER BY rating DESC;
    ${offset ? Prisma.sql`LIMIT ${offset}, ${limit}` : Prisma.empty};`);
};

const getReviews = async (id, offset, limit) => {
  let reviews = [];
  return (reviews = await prisma.$queryRaw`
    SELECT * 
    FROM reviews WHERE product_id=${id} 
    ORDER BY created_at DESC 
    ${offset ? Prisma.sql`Limit ${offset}, ${limit}` : Prisma.empty};`);
};

export default { getReviews, getReviewsByRating };
