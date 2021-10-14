import { errorGenerator } from '../utils';
import { productDAO } from '../models';

const getAllProducts = async () => {
  const allProducts = await productDAO.getAllProducts();
  if (!allProducts) errorGenerator(404, 'ALLPRODUCTS_DOES_NOT_EXIST');
  return allProducts;
};

const getSortedProducts = async sort => {
  const getSortedProducts = await productDAO.getSortedProducts(sort);
  const getHoverImages = await productDAO.getHoverImages();
  const addImage = getSortedProducts.map(product => {
    const {
      id,
      name,
      price,
      createdAt,
      subCategoryId,
      mainCategoryId,
      thumbnailUrl,
    } = product;
    const addHoverImage = getHoverImages.filter(
      image => image.productId == product.id
    );
    let totalImages = {
      id,
      name,
      price,
      createdAt,
      subCategoryId,
      mainCategoryId,
      thumbnailUrl,
      hoverImages: addHoverImage[1].imageUrl,
    };
    return totalImages;
  });
  return addImage;
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
