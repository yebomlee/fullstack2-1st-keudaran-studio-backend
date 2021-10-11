import prisma from '../../prisma';

const getReviewsByRating = async (id, ea) => {
  let reviews = [];
  reviews = ea
    ? await prisma.$queryRaw`SELECT * FROM reviews WHERE reviews.product_id=${id} ORDER BY rating DESC LIMIT ${ea};`
    : await prisma.$queryRaw`SELECT * FROM reviews WHERE reviews.product_id=${id} ORDER BY rating DESC;`;
  return reviews;
};

const getReviews = async (id, ea) => {
  let reviews = [];
  reviews = ea
    ? await prisma.$queryRaw`SELECT * FROM reviews WHERE product_id=${id} ORDER BY created_at DESC LIMIT ${ea} ;`
    : await prisma.$queryRaw`SELECT * FROM reviews WHERE product_id=${id} ORDER BY created_at DESC;`;
  return reviews;
};

export default { getReviews, getReviewsByRating };
