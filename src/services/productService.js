import { productDAO } from '../models';
import { errorGenerator } from '../utils';

const getProduct = async productId => {
  const product = productDAO.getProduct(productId);
  if (!product) errorGenerator(404, 'PRODUCT_DOES_NOT_EXIST');
  return product;
};

const getProductImages = async productId => {
  const productImages = productDAO.getProductImages(productId);
  if (!productImages) errorGenerator(404, 'PRODUCT_IMAGES_DOES_NOT_EXIST');
  return productImages;
};

const getProductOptions = async productId => {
  const productOptions = productDAO.getProductOptions(productId);
  if (!productOptions) errorGenerator(404, 'PRODUCT_OPTIONS_DOES_NOT_EXIST');
  return productOptions;
};

export default { getProduct, getProductImages, getProductOptions };
