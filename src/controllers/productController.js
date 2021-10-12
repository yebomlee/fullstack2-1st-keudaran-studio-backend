import { asyncWrapper } from '../utils';
import { productService } from '../services';

const getAllProducts = asyncWrapper(async (req, res) => {
  const products = await productService.getAllProducts();
  res.status(200).json({
    myProducts: products,
  });
});

const sortLowPrice = asyncWrapper(async (req, res) => {
  const lowPrice = await productService.sortLowPrice();
  res.status(200).json({
    lowPrice: lowPrice,
  });
});

const sortHighPrice = asyncWrapper(async (req, res) => {
  const highPrice = await productService.sortHighPrice();
  res.status(200).json({
    highPrice: highPrice,
  });
});

const sortName = asyncWrapper(async (req, res) => {
  const name = await productService.sortName();
  res.status(200).json({
    name: name,
  });
});

const sortDate = asyncWrapper(async (req, res) => {
  const date = await productService.sortDate();
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
  sortLowPrice,
  sortHighPrice,
  sortName,
  sortDate,
};
