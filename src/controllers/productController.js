import { asyncWrapper } from '../utils';
import { productService } from '../services';

const getAllProducts = asyncWrapper(async (req, res) => {
  const products = await productService.getAllProducts();
  res.status(200).json({
    myProducts: products,
  });
});

const lowPricedProducts = asyncWrapper(async (req, res) => {
  const lowPrice = await productService.lowPricedProducts();
  res.status(200).json({
    lowPrice: lowPrice,
  });
});

const highPricedProducts = asyncWrapper(async (req, res) => {
  const highPrice = await productService.highPricedProducts();
  res.status(200).json({
    highPrice: highPrice,
  });
});

const namedProducts = asyncWrapper(async (req, res) => {
  const name = await productService.namedProducts();
  res.status(200).json({
    name: name,
  });
});

const datedProducts = asyncWrapper(async (req, res) => {
  const date = await productService.datedProducts();
  res.status(200).json({
    date: date,
  });
});

const getProductDetail = asyncWrapper(async (req, res) => {
  const { id } = req.query;
  const productDetail = await productService.getProductDetail(id);
  res.json(productDetail);
});

export default {
  getProductDetail,
  getAllProducts,
  lowPricedProducts,
  highPricedProducts,
  namedProducts,
  datedProducts,
};
