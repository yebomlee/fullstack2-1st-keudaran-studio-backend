import { productService } from '../services';

const getAllProducts = async (req, res) => {
  const products = await productService.getAllProducts();
  res.status(200).json({
    myProducts: products,
  });
};

const sortLowPrice = async (req, res) => {
  const lowPrice = await productService.sortLowPrice();
  res.status(200).json({
    lowPrice: lowPrice,
  });
};

const sortHighPrice = async (req, res) => {
  const highPrice = await productService.sortHighPrice();
  res.status(200).json({
    highPrice: highPrice,
  });
};

const sortName = async (req, res) => {
  const name = await productService.sortName();
  res.status(200).json({
    name: name,
  });
};

const sortDate = async (req, res) => {
  const date = await productService.sortDate();
  res.status(200).json({
    date: date,
  });
};
export default {
  getAllProducts,
  sortLowPrice,
  sortHighPrice,
  sortName,
  sortDate,
};
