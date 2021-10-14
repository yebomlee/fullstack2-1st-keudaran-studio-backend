import prisma from '../../prisma';
import { Prisma } from '@prisma/client';

const getSortedProducts = async sort => {
  let query = '';
  if (sort === 'highprice') query = Prisma.sql`p.price DESC`;
  if (sort === 'lowprice') query = Prisma.sql`p.price`;
  if (sort === 'recent') query = Prisma.sql`p.created_at DESC`;
  if (sort === 'name') query = Prisma.sql`p.name`;
  return await prisma.$queryRaw`
  SELECT
    p.id,
    p.name,
    p.price,
    p.thumbnail_url as thumbnailUrl,
    p.created_at as createdAt,
    p.sub_category_id as subCategoryId
  FROM products p
  ORDER BY ${query}
  `;
};

const getHoverImages = async () => {
  return await prisma.$queryRaw`
  select id, image_url as imageUrl, product_id as productId from product_images
  `;
};

const getAllProducts = async () => {
  return await prisma.$queryRaw`
  SELECT
    p.id,
    p.name,
    p.price,
    p.thumbnail_url as thumbnailUrl,
    p.description_image_url as descriptionImageUrl,
    p.created_at as createdAt
  FROM products p
  `;
};

const getProduct = async productId => {
  const [product] = await prisma.$queryRaw`
  SELECT    p.id,
    p.NAME,
    p.price,
    p.point,
    p.quantity,
    p.thumbnail_url as thrmbnailUrl,
    p.description_image_url as descriptionImageUrl,
    p.created_at as createdAt,
    p.updated_at as updatedAt,
    p.sub_category_id as subCategoryId,
    p.production_inform_id as productionInformId,
    pi.id,
    pi.origin,
    pi.manufacturer,
    pi.brand,
    pi.shipping_fee as shippingFee
  FROM        products AS p
  INNER JOIN  production_informs PI
  ON          p.production_inform_id = pi.id
  WHERE       p.id = ${productId}
  `;
  return product;
};

const getProductOptions = async productId => {
  const productOptions = await prisma.$queryRaw`
  SELECT  PO.id,
    PO.NAME,
    PO.quantity,
    PO.product_id as productId
  FROM    product_options PO
  WHERE   product_id = ${productId}; 
  `;
  return productOptions;
};

const getProductImages = async productId => {
  const productImages = await prisma.$queryRaw`
  SELECT  PI.id,
    PI.image_url as imageUrl,
    PI.product_id as productId
  FROM    product_images PI
  WHERE   product_id = ${productId}; 
  `;
  return productImages;
};

export default {
  getSortedProducts,
  getHoverImages,
  getAllProducts,
  getProduct,
  getProductOptions,
  getProductImages,
};
