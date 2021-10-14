import { errorGenerator } from '../utils';
import { productDAO } from '../models';
import { urlencoded } from 'express';

const getAllProducts = async () => {
  const allProducts = await productDAO.getAllProducts();
  if (!allProducts) errorGenerator(404, 'ALLPRODUCTS_DOES_NOT_EXIST');
  return allProducts;
};

const getSortedProducts = async sort => {
  const getSortedProducts = await productDAO.getSortedProducts(sort);
  const getHoverImages = await productDAO.getHoverImages();
  const addImage = getSortedProducts.forEach(product => {
    const { id, name, price, createdAt, subCategoryId, thumbnailUrl } = product;
    const addHoverImage = getHoverImages.filter(
      image => image.productId == product.id
    );
    let totalImages = {
      id,
      name,
      price,
      createdAt,
      subCategoryId,
      thumbnailUrl,
      hoverImages: addHoverImage[1].imageUrl,
    };
    console.log(totalImages);
    return totalImages;
  });
  return addImage;
};
// const getSortedProducts = async sort => {
//   console.log(sort);
//   const sortedProducts = await productDAO.getSortedProducts(sort);
//   if (!sortedProducts) errorGenerator(404, `${sort}_DOES_NOT_EXIST`);
//   // const sortedProductsImage = await productDAO.getSortedProductImages(
//   //   productId
//   // );
//   //   const newArr = sortedProducts.map((product, i)=>{
//   // if(product.id === sortedProductsImage[i])
//   // //   })
//   // for (let i = 0; i < sortedProducts.length; i++)
//   //   for (let j = 0; j < sortedProductsImage.length; j++)
//   //     if (sortedProducts[i].id === sortedProductsImage[j].id)
//   //       sortedProducts[i].hoverImage = sortedProductsImage[j].imageUrl;

//   console.log(sortedProducts);

//   // const newArr = sortedProducts.map((product, i, arr) => {
//   //   // console.log(product.id, arr[i + 1].id);
//   //   if (product.id != arr[arr.length-1 === i ? i + 1].id) return product;
//   // });
//   // console.log(newArr);
//   // return newArr;
//   return sortedProducts;
// };

// product : {
//   Id,
//   name,
//  Img,
// img: {
//   url: as;
//   kldifjalsdijgladfijg;
// }
// }

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
