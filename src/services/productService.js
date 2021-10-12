import { errorGenerator } from '../utils';
import { productDAO } from '../models';

const getAllProducts = async () => {
  return await productDAO.getAllProducts();
};

const sortLowPrice = async () => {
  const lowPrice = await productDAO.getAllProducts();
  return lowPrice.sort((a, b) => a.price - b.price);
}; //오름차순

const sortHighPrice = async () => {
  const highPrice = await productDAO.getAllProducts();
  return highPrice.sort((a, b) => b.price - a.price);
}; //내림차순

const sortName = async () => {
  const name = await productDAO.getAllProducts();
  return name.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });
}; // 이름순

const sortDate = async () => {
  const date = await productDAO.getAllProducts();
  console.log('service');
  return date.sort((a, b) => (a.created_at > b.created_at ? -1 : 1));
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
  getAllProducts,
  sortLowPrice,
  sortHighPrice,
  sortName,
  sortDate,
};
