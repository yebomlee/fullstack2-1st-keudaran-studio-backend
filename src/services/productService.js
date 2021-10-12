import { errorGenerator } from '../utils';
import { productDAO } from '../models';

const getAllProducts = async () => {
  const allProducts = await productDAO.getAllProducts();
  if (!allProducts) errorGenerator(404, 'ALLPRODUCTS_DOES_NOT_EXIST');
  return allProducts;
};

const lowPricedProducts = async () => {
  const lowPrice = await productDAO.getAllProducts();
  if (!lowPrice) errorGenerator(404, 'LOWPRICE_DOES_NOT_EXIST');
  return lowPrice.sort((a, b) => a.price - b.price);
}; //오름차순

const highPricedProducts = async () => {
  const highPrice = await productDAO.getAllProducts();
  if (!highPrice) errorGenerator(404, 'HIGHPRICE_DOES_NOT_EXIST');
  return highPrice.sort((a, b) => b.price - a.price);
}; //내림차순

const namedProducts = async () => {
  const name = await productDAO.getAllProducts();
  if (!name) errorGenerator(404, 'NAME_DOES_NOT_EXIST');
  return name.sort((a, b) => {
    if (a.name > b.name) return 1;
    if (a.name < b.name) return -1;
  });
}; // 이름순

const datedProducts = async () => {
  const date = await productDAO.getAllProducts();
  if (!date) errorGenerator(404, 'DATE_DOES_NOT_EXIST');
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
  lowPricedProducts,
  highPricedProducts,
  namedProducts,
  datedProducts,
};
