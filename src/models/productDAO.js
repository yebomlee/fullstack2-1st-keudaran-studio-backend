import prisma from '../../prisma';

const getProduct = async productId => {
  const [product] = await prisma.$queryRaw`
  SELECT *
  FROM products as P
  INNER JOIN production_informs PI ON P.production_inform_id = PI.id
  where P.id = ${productId}
  `;
  return product;
};

const getProductOptions = async productId => {
  const productOptions = await prisma.$queryRaw`
  SELECT * FROM product_options
  WHERE product_id =${productId};
  `;
  return productOptions;
};

const getProductImages = async productId => {
  const productImages = await prisma.$queryRaw`
  SELECT * FROM product_images
  WHERE product_id =${productId};
  `;
  return productImages;
};

export default { getProduct, getProductOptions, getProductImages };
