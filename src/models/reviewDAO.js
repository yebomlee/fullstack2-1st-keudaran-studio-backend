import prisma from '../../prisma';
import { Prisma } from '@prisma/client';

const getReviewsByRating = async (id, offset, limit) => {
  let reviews = [];

  return (reviews = await prisma.$queryRaw`
    SELECT *
    FROM reviews
    LEFT JOIN review_images
    ON reviews.id = review_images.review_id
    WHERE reviews.product_id=${id}
    ORDER BY rating DESC
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
