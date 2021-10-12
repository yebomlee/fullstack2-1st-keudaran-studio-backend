import { productDAO } from '../models';
import { errorGenerator } from '../utils';

const getProductDetail = async productId => {
  const product = await productDAO.getProduct(productId);
  if (!product) errorGenerator(404, 'PRODUCT_DOES_NOT_EXIST');
  const productOption = await productDAO.getProductOptions(productId);
  if (!productOption) errorGenerator(404, 'PRODUCT_OPTIONS_DOES_NOT_EXIST');
  const productImage = await productDAO.getProductImages(productId);
  if (!productImage) errorGenerator(404, 'PRODUCT_IMAGES_DOES_NOT_EXIST');
  const productDetail = {
    ...product,
    productOption,
    productImage,
  };
  return productDetail;
};

export default { getProductDetail };
