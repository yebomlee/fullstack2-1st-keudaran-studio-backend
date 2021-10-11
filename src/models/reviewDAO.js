import prisma from '../../prisma';
import { Prisma } from '@prisma/client';

const getReviewsByRating = async (id, limit, offset) => {
  let reviews = [];

  return (reviews = await prisma.$queryRaw`
    SELECT *
    FROM reviews
    LEFT JOIN review_images
    ON reviews.id = review_images.review_id
    WHERE reviews.product_id=${id}
    ORDER BY rating DESC
    ${Prisma.sql`Limit 1`};`);

  // : await prisma.$queryRaw`
  // SELECT *
  // FROM reviews
  // LEFT JOIN review_images
  // ON reviews.id = review_images.review_id
  // WHERE reviews.product_id=${id}
  // ORDER BY rating DESC;`;
};

// const query = '';

// if (offset) {
//   query += 'OFFSET 1';
// }

// if (limit) {
//   query += 'LIMIT 50';
// }

const getReviews = async (id, ea) => {
  let reviews = [];
  reviews = ea
    ? await prisma.$queryRaw`SELECT * FROM reviews WHERE product_id=${id} ORDER BY created_at DESC LIMIT ${ea} ;`
    : await prisma.$queryRaw`SELECT * FROM reviews WHERE product_id=${id} ORDER BY created_at DESC;`;
  return reviews;
};

export default { getReviews, getReviewsByRating };
