import { errorGenerator } from '../utils';
import { productDAO } from '../models';

const getAllProducts = async () => {
  const allProducts = await productDAO.getAllProducts();
  if (!allProducts) errorGenerator(404, 'ALLPRODUCTS_DOES_NOT_EXIST');
  return allProducts;
};

const getSortedProducts = async sort => {
  const sortedProducts = await productDAO.getSortedProducts(sort);
  if (!sortedProducts) errorGenerator(404, `${sort}_DOES_NOT_EXIST`);
  return sortedProducts;
};

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

export default {
  getProductDetail,
  getSortedProducts,
  getAllProducts,
};
